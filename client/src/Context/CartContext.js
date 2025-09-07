import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const CartContext = createContext();

// Reducer for cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART": {
      const itemToRemove = state.find((item) => item.id === action.payload.id);
      if (itemToRemove.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }

    case "SET_CART":
      return action.payload;

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// Session storage helpers
function saveCartToSessionStorage(cartItems) {
  try {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Failed to save cart to sessionStorage:", error);
  }
}

function loadCartFromSessionStorage() {
  try {
    const storedCart = sessionStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from sessionStorage:", error);
    return [];
  }
}

function clearSessionStorageCart() {
  try {
    sessionStorage.removeItem("cartItems");
  } catch (error) {
    console.error("Failed to clear sessionStorage:", error);
  }
}

// Provider
const CartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [cart, dispatch] = useReducer(
    cartReducer,
    loadCartFromSessionStorage()
  );

  // Save cart to backend for authenticated user
  const saveCart = useCallback(
    async (cartItems) => {
      if (!user) return;
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/cart/save`, {
          auth0Id: user.sub,
          items: cartItems,
        });
      } catch (error) {
        console.error("Failed to save cart:", error);
      }
    },
    [user]
  );

  // Merge backend + sessionStorage cart on login
  const syncCartFromBackend = useCallback(async () => {
    if (!isAuthenticated || !user) return;

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/cart/${user.sub}`
      );

      const backendCartItems = response.data.items
        ? response.data.items.map((item) => ({
            id: item.id,
            name: item.product,
            price: item.price,
            quantity: item.quantity,
          }))
        : [];

      const sessionStorageItems = loadCartFromSessionStorage();
      const mergedCart = [...backendCartItems];

      // Merge session into backend cart
      sessionStorageItems.forEach((sessionItem) => {
        const existingItem = mergedCart.find(
          (item) => item.name === sessionItem.name
        );
        if (existingItem) {
          existingItem.quantity += sessionItem.quantity;
        } else {
          mergedCart.push(sessionItem);
        }
      });

      // Set merged cart to state
      dispatch({ type: "SET_CART", payload: mergedCart });
      saveCartToSessionStorage(mergedCart);

      // Save merged cart to backend if session had extras
      if (sessionStorageItems.length > 0) {
        await saveCart(mergedCart);
        clearSessionStorageCart(); // clear guest cart after merge
      }
    } catch (error) {
      console.error("Failed to sync cart:", error);
    }
  }, [isAuthenticated, user, saveCart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    saveCartToSessionStorage([]);
    if (isAuthenticated) saveCart([]);
  };

  useEffect(() => {
    if (isAuthenticated) {
      syncCartFromBackend();
    }
  }, [isAuthenticated, syncCartFromBackend]);

  const addToCart = (item) => {
    const updatedCart = cartReducer(cart, {
      type: "ADD_TO_CART",
      payload: item,
    });
    dispatch({ type: "ADD_TO_CART", payload: item });
    saveCartToSessionStorage(updatedCart);
    if (isAuthenticated) saveCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartReducer(cart, {
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    saveCartToSessionStorage(updatedCart);
    if (isAuthenticated) saveCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
export default CartContext;
