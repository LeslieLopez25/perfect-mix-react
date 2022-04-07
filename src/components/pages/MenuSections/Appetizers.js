import React from "react";
import "../../../App.css";
import data from "../../Products/data";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductElements.css";

export default function Appetizers() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Appetizers</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {/* Mapped through the appetizer list of products in data file */}
            {data.AppetizerList.map((item) => {
              return (
                <ProductCard key={item.id} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
