import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

// Renders the Beverages page section, showing a list of beverages products
export default function Beverages() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Beverages</h2>
      {/* Display Product component filtered by "Beverages" category */}
      <div className="product-wrapper">
        <Product category="Beverage" />
      </div>
    </div>
  );
}
