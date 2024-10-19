import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

export default function Appetizers() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Appetizers</h2>
      <div className="product-wrapper">
        <div className="product-card">
          <Product category="Appetizer" />
        </div>
      </div>
    </div>
  );
}
