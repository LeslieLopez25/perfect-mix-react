import React from "react";
import "../../../App.css";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductElements.css";

export default function Appetizers({ data, handleClick }) {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Appetizers</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {data.map((data) => {
              return (
                <ProductCard key={data.id} data={data} handleClick={handleClick} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
