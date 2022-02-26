import React from "react";
import "../../../App.css";
import { AppetizerList } from "../../Products/data";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Appetizers() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Appetizers</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {AppetizerList.map((products, key) => {
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
