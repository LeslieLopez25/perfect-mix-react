import React from "react";
import "../../../App.css";
import { MenuList } from "../../Products/data";
import Products from "../../Products/Products";
import "../../Products/ProductElements.css";

export default function Menu() {
  return (
    <div className="product-container">
      <h2 className="product-heading">Menu</h2>
      <div className="product-info">
        <div className="product-card">
          <div className="product-wrapper">
            {MenuList.map((productList, key) => {
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
    </div>
  );
}
