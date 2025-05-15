import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

// Renders the Main page section, showing a list of main products
export default function Main() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Main</h2>
      {/* Display Product component filtered by "Main" category */}
      <div className="product-wrapper">
        <Product category="Main" />
      </div>
    </div>
  );
}
