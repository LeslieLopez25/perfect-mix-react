import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/shop-context";
import { DATA } from "../../data";
import { CartItem } from "./cart-item.component";
import { useNavigate } from "react-router-dom";

import "./cart.styles.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div>
        <h2 className="cart-heading">Your Cart Items</h2>
      </div>
      <div className="cartItems">
        {Array.from(DATA).map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
