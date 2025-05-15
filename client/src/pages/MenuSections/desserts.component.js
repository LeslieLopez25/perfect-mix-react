import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

// Renders the Desserts page section, showing a list of desserts products
export default function Desserts() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Desserts</h2>
      {/* Display Product component filtered by "Desserts" category */}
      <div className="product-wrapper">
        <Product category="Dessert" />
      </div>
    </div>
  );
}
