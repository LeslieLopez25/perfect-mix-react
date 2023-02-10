import React from "react";
import "../../../App.css";
import { DATA } from "../../../data";
import ProductCard from "../../Products/product-card.component";
import "../../Products/product.styles.css";

export default function Appetizers() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Appetizers</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {/* Mapped through the appetizer list of products in data file */}
            {DATA.AppetizerList.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
