import React from "react";
import "../../../App.css";
import { BeverageList } from "../../Products/data";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Beverages() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Beverages</h2>
      <div className="product-wrapper">
        <div className="product-card">
          {BeverageList.map((productList, key) => {
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
