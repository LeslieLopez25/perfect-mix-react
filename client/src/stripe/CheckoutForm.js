import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "../components/Button/button.component";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../Context/CartContext";
import axios from "axios";

import "./CheckoutForm.styles.css";

Modal.setAppElement("#root");

const apiURL = process.env.REACT_APP_API_URL;

// Checkout form for Stripe payment processing
export const CheckoutForm = ({ items }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { clearCart } = useCartContext();

  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  // Handles Stripe payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        // Send payment info to backend
        const response = await axios.post(`${apiURL}/api/payment`, {
          id,
          amount: calculateTotalAmount(items),
        });

        // If payment is successful, show receipt
        if (response.data.success) {
          setPaymentSuccess(true);
          setReceiptData({
            name: user?.name,
            items,
            total: calculateTotalAmount(items),
            date: new Date().toLocaleString(),
          });
          setModalIsOpen(true);
        }
      } catch (error) {
        console.log("Payment failed", error);
      }
    } else {
      console.log("Stripe error:", error.message);
    }
  };

  return (
    <>
      {/* Stripe payment form */}
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2>Credit Card Payment:</h2>
        <div className="payment-container">
          <div className="card-details">
            <CardElement
              className="card-element"
              options={{
                style: {
                  base: {
                    color: "#a53005",
                    iconColor: "#a53005",
                    "::placeholder": {
                      color: "#a53005",
                    },
                  },
                },
              }}
            />
          </div>
          <Button
            buttonStyle="btn--primary btn-medium"
            type="submit"
            disabled={!stripe}
          >
            Pay Now
          </Button>
        </div>
      </form>

      {/* Receipt Modal - shows after successful payment */}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="receipt">
            <h2>Receipt</h2>
            <p>Thank you, {receiptData?.name}!</p>
            <p>Date: {receiptData?.date}</p>
            <ul>
              {receiptData?.items.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total: ${receiptData?.total.toFixed(2)}</p>
            <Button
              buttonStyle="btn--primary btn-medium"
              onClick={() => {
                setModalIsOpen(false);
                clearCart();
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
