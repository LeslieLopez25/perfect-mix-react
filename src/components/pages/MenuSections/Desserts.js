import React from "react";
import "../../../App.css";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductElements.css";

export default function Desserts({ data }) {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Desserts</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {data.map((item) => {
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
