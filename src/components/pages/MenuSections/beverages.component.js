import React from "react";
import "../../../App.css";
import data from "../../Products/data";
import ProductCard from "../../Products/product-card.component";
import "../../Products/product.styles.css";

export default function Beverages() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Beverages</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {/* Mapped through the beverage list of products in data file */}
            {data.BeverageList.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
