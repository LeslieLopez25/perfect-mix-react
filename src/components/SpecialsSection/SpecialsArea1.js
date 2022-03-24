import React from "react";
import "../../App.css";
import Products from "../Products/Products";
import "../Products/ProductElements.css";

function SpecialsSection({ data }) {
  return (
    <div className="product-container">
      <h2 className="product-heading">
        Specials This Week For The Menu And Desserts
      </h2>
      <div className="product-wrapper">
        <div className="product-card">
          {data.map((productList, key) => {
            return (
              <Products
                key={key}
                image={productList.image}
                name={productList.name}
                desc={productList.desc}
                price={productList.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SpecialsSection;
