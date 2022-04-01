import React from "react";
import "../../App.css";
import data from "../Products/data";
import ProductCard from "../Products/ProductCard";
import "../Products/ProductElements.css";

export default function SpecialsSection() {
  return (
    <div className="product-container">
      <h2 className="product-heading">
        Specials This Week For The Menu And Desserts
      </h2>
      <div className="product-wrapper">
        <div className="product-card">
          {data.SpecialsList.map((item) => {
              return (
                <ProductCard key={item.id} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
