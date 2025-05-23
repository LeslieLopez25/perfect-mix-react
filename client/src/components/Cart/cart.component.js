import React, { useEffect, useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Button } from "../Button/button.component";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../../stripe/CheckoutForm";

import "./cart.styles.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const apiURL = process.env.REACT_APP_API_URL;

// Cart component displays current cart items, allows quantity updates,
// shows total price, and renders Stripe checkout form
export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const increaseQuantity = (item) => {
    addToCart(item);
  };

  const decreaseQuantity = (item) => {
    removeFromCart(item);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Scrolls to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-message">Your Cart Is Empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={`${apiURL}${item.image}`} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <Button
                      buttonStyle="btn--cart"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      buttonStyle="btn--cart"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>

          {/* Stripe payment form */}
          <Elements stripe={stripePromise}>
            <CheckoutForm name="Customer Name" items={cart} />
          </Elements>
        </>
      )}
    </div>
  );
}
