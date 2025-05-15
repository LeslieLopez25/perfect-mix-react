import React from "react";
import { Product } from "../../components/Products/product-card.component";

import "../../App.css";
import "../../components/Products/product.styles.css";

// Renders the Specials page section, showing a list of specials products
export default function SpecialsSection() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Specials This Week</h2>
      {/* Display Product component filtered by "Specials" category */}
      <div className="product-wrapper">
        <Product category="Specials" />
      </div>
    </div>
  );
}
