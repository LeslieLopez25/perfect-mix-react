import React from "react";
import "../../../App.css";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductElements.css";

export default function Cart({cart, removeFromCart}) {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Cart</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {cart.map((item) => {
              return (
                <ProductCard key={item.id} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
