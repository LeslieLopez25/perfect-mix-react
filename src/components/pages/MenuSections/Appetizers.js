import React from "react";
import "../../../App.css";
import { AppetizerList } from "../../Products/data";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Appetizers() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Appetizers</h2>
      <div className="product-wrapper">
        <div className="product-card">
          {AppetizerList.map((productList, key) => {
            return (
              <Products
                key={key}
                image={productList.image}
                name={productList.name}
                desc={productList.desc}
                price={productList.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
