import React from "react";
import "../../../App.css";
import data from "../../Products/data";
import ProductCard from "../../Products/productCard.component";
import "../../Products/product.styles.css";

export default function Desserts() {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Desserts</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {/* Mapped through the dessert list of products in data file */}
            {data.DessertList.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
