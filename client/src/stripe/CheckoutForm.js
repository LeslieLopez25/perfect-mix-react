import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export const CheckoutForm = ({ cartItems, totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const res = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems, amount: totalAmount }),
    });

    const { clientSecret } = await res.json();

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: "Your customer name",
        },
      },
    });

    if (paymentResult.error) {
      setError(paymentResult.error.message);
      setProcessing(false);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setSuccess(true);
        setProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <div>{error}</div>}
      {success && <div>Payment succeeded!</div>}
    </form>
  );
};
