import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

export default function Beverages() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Beverages</h2>
      <div className="product-wrapper">
        <Product category="Beverage" />
      </div>
    </div>
  );
}
