import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

// Renders the Appetizers page section, showing a list of appetizer products
export default function Appetizers() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Appetizers</h2>
      {/* Display Product component filtered by "Appetizer" category */}
      <div className="product-wrapper">
        <Product category="Appetizer" />
      </div>
    </div>
  );
}
