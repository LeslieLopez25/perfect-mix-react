import React from "react";
import "../../App.css";
import { PRODUCTS } from "../../data";
import { Product } from "../../components/Products/product-card.component";
import "../../components/Products/product.styles.css";

export default function Appetizers() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Appetizers</h2>
      <div className="product-wrapper">
        <div className="product-card">
          {/* Mapped through the appetizer list of products in data file */}
          {PRODUCTS.AppetizerList.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
