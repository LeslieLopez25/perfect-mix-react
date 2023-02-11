import React from "react";
import "../../../App.css";
import { DATA } from "../../../data";
import { Product } from "../../Products/product-card.component";
import "../../Products/product.styles.css";

export default function Desserts() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Desserts</h2>
      <div className="product-wrapper">
        <div className="product-card">
          {/* Mapped through the dessert list of products in data file */}
          {DATA.DessertList.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
