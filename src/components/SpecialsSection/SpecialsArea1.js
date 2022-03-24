import React from "react";
import "../../App.css";
import Products from "../Products/Products";
import "../Products/ProductElements.css";

export default function SpecialsSection({ data }) {
  return (
    <div className="product-container">
      <h2 className="product-heading">
        Specials This Week For The Menu And Desserts
      </h2>
      <div className="product-wrapper">
        <div className="product-card">
          {data.map((data, key) => {
            return (
              <Products
                key={key}
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
