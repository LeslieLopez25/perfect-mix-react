import React from "react";
import "../../../App.css";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Beverages({ data }) {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Beverages</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {data.map((products, key) => {
              return (
                <Products
                  key={key}
                  image={products.image}
                  name={products.name}
                  desc={products.desc}
                  price={products.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
