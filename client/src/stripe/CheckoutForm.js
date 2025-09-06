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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }

    if (!stripe || !elements) return;

    try {
      //  Request clientSecret from backend
      const { data } = await axios.post(`${apiURL}/create-payment-intent`, {
        amount: calculateTotalAmount(items),
      });
      const clientSecret = data.clientSecret?.trim();

      //  Get card details
      const cardElement = elements.getElement(CardElement);

      //  Confirm payment with Stripe using clientSecret
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              email: user?.email,
              name: user?.name || "Customer",
            },
          },
        }
      );

      if (error) {
        console.error("Stripe error:", error.message);
        alert(error.message);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
        setReceiptData({
          name: user?.name || "Customer",
          items,
          total: calculateTotalAmount(items),
          date: new Date().toLocaleString(),
        });
        setModalIsOpen(true);
      }
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Payment failed. Please try again.");
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
                    fontSize: "16px",
                    color: "#a53005",
                    iconColor: "#a53005",
                    "::placeholder": {
                      color: "#a53005",
                    },
                  },
                  invalid: {
                    color: "#e5424d",
                  },
                },
                hidePostalCode: false,
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

      {/* Receipt Modal */}
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
