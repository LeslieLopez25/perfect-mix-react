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

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      const itemToRemove = state.find((item) => item.id === action.payload.id);
      if (itemToRemove.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "SET_CART":
      return action.payload;

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// Helper functions to save/load cart from sessionStorage
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

const CartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [cart, dispatch] = useReducer(
    cartReducer,
    loadCartFromSessionStorage()
  );

  // Save cart to backend
  const saveCart = useCallback(
    async (cartItems) => {
      if (!user) return;

      try {
        await axios.post("/api/cart/save", {
          userId: user.sub,
          items: cartItems,
        });
      } catch (error) {
        console.error("Failed to save cart:", error);
      }
    },
    [user]
  );

  // Sync backend cart items, merging with session storage if needed
  const syncCartFromBackend = useCallback(async () => {
    if (!isAuthenticated || !user) return;

    try {
      const response = await axios.get(`/api/cart/${user.sub}`);
      const backendCartItems = response.data.items
        ? response.data.items.map((item) => ({
            id: item.id,
            name: item.product,
            price: item.price,
            quantity: item.quantity,
          }))
        : [];

      // Load any items from session storage that aren't in backend cart
      const sessionStorageItems = loadCartFromSessionStorage();
      const mergedCart = [...backendCartItems];

      sessionStorageItems.forEach((sessionItem) => {
        const existingItem = mergedCart.find(
          (item) => item.id === sessionItem.id
        );
        if (existingItem) {
          existingItem.quantity += sessionItem.quantity;
        } else {
          mergedCart.push(sessionItem);
        }
      });

      dispatch({ type: "SET_CART", payload: mergedCart });
      saveCartToSessionStorage(mergedCart);

      // Save the merged cart to backend if it includes new items
      if (sessionStorageItems.length > 0) {
        saveCart(mergedCart);
      }
    } catch (error) {
      console.error("Failed to load cart from backend:", error);
    }
  }, [isAuthenticated, user, saveCart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Sync cart from backend once on login
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
