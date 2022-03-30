import React from "react";
import "../../App.css";
import ProductCard from "../Products/ProductCard";
import "../Products/ProductElements.css";

export default function Specials2Section({ data }) {
  return (
    <div className="product-container">
      <h2 className="product-heading">
        Specials This Week For The Appetizers And Beverages
      </h2>
      <div className="product-wrapper">
        <div className="product-card">
          {data.map((data, id) => {
            return (
              <ProductCard
                key={id}
                image={data.image}
                name={data.name}
                desc={data.desc}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
