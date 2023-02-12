import React from "react";
import "../../../App.css";
import { PRODUCTS } from "../../../data";
import { Product } from "../../Products/product-card.component";
import "../../Products/product.styles.css";

export default function Menu() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Menu</h2>
      <div className="product-wrapper">
        <div className="product-card">
          {/* Mapped through the main menu list of products in data file */}
          {PRODUCTS.MenuList.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
