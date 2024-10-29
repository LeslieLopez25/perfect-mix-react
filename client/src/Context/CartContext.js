import React, {
  createContext,
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

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Wrap saveCart in useCallback to prevent re-creation on each render
  const saveCart = useCallback(
    async (cartItems) => {
      if (!user) return;

      try {
        await axios.post("http://localhost:5000/api/cart/save", {
          userId: user.sub,
          items: cartItems,
        });
      } catch (error) {
        console.error("Failed to save cart:", error);
      }
    },
    [user]
  );

  const addToCart = (item) => {
    const updatedCart = cartReducer(cart, {
      type: "ADD_TO_CART",
      payload: item,
    });
    dispatch({ type: "ADD_TO_CART", payload: item });
    if (isAuthenticated) saveCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartReducer(cart, {
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    if (isAuthenticated) saveCart(updatedCart);
  };

  useEffect(() => {
    if (isAuthenticated) saveCart(cart);
  }, [cart, isAuthenticated, saveCart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
