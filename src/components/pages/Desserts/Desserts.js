import React from "react";
import "../../../App.css";
import { DessertList } from "../../Products/data";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Desserts() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Desserts</h2>
      <div className="product-wrapper">
        <div className="product-card">
          {DessertList.map((productList, key) => {
            return (
              <Products
                key={key}
                image={productList.image}
                name={productList.name}
                desc={productList.desc}
                price={productList.price}
                button={productList.Button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
