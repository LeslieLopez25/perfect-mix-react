import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const CartContext = createContext();

// Update the cartReducer to include CLEAR_CART
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

    case "CLEAR_CART": // Add this case to reset cart to an empty array
      return [];

    default:
      return state;
  }
};

// Helper functions to save, load, and clear cart from sessionStorage
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

// Add clearSessionStorage helper function if not already in your context
function clearSessionStorage() {
  try {
    sessionStorage.removeItem("cartItems");
  } catch (error) {
    console.error("Failed to clear sessionStorage:", error);
  }
}

export const CartProvider = ({ children }) => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [cart, dispatch] = useReducer(
    cartReducer,
    loadCartFromSessionStorage()
  );

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

  const syncCartFromBackend = useCallback(async () => {
    if (!isAuthenticated || !user) return;

    try {
      const response = await axios.get(`/api/cart/${user.sub}`);
      const backendCartItems = response.data.items || [];

      // Clear current cart before dispatching items from the backend
      dispatch({ type: "CLEAR_CART" }); // Ensure cart is empty before loading
      backendCartItems.forEach((item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      });

      saveCartToSessionStorage(backendCartItems);
    } catch (error) {
      console.error("Failed to load cart from backend:", error);
    }
  }, [isAuthenticated, user]);

  // Sync cart from backend when the user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      syncCartFromBackend();
    }
  }, [isAuthenticated, syncCartFromBackend]);

  // Add clearCart function inside CartProvider so it can access dispatch
  const clearCart = () => {
    clearSessionStorage();
    dispatch({ type: "CLEAR_CART" });
  };

  // Modify handleLogout function to use clearCart
  const handleLogout = () => {
    clearCart();
    logout({ returnTo: window.location.origin });
  };

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

  useEffect(() => {
    // Synchronize cart state with sessionStorage on app load
    const storedCart = loadCartFromSessionStorage();
    if (storedCart.length) {
      storedCart.forEach((item) =>
        dispatch({ type: "ADD_TO_CART", payload: item })
      );
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        saveCart,
        clearSessionStorage,
        loadCartFromSessionStorage,
        clearCart,
        handleLogout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
