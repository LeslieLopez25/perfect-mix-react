import React from "react";
import "../../../App.css";
import CartCard from "../../pages/Cart/CartCard";
import "../../Products/ProductElements.css";

export default function Cart({ cart }) {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Cart</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {cart.data.map((item) => {
              return (
                <CartCard key={item.id} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
