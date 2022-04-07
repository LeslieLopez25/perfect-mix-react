import React from "react";
import "../../../App.css";
import data from "../../Products/data";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductElements.css";

export default function Menu() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Menu</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {/* Mapped through the main menu list of products in data file */}
            {data.MenuList.map((item) => {
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
