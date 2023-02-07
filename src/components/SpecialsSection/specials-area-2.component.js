import React from "react";
import "../../App.css";
import data from "../Products/data";
import ProductCard from "../Products/product-card.component";
import "../Products/product.styles.css";

export default function Specials2Section() {
  return (
    <div className="product-container">
      <h2 className="product-heading">
        Specials This Week For The Appetizers And Beverages
      </h2>
      <div className="product-wrapper">
        <div className="product-card">
          {/* Mapped through the second specials of the week list of products in data file */}
          {data.SpecialsList2.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
