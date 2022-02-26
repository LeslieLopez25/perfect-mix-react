import React from "react";
import "../../../App.css";
import { DessertList } from "../../Products/data";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Desserts() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Desserts</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {DessertList.map((products, key) => {
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
