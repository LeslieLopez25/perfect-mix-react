import React from "react";
import "../../App.css";
import { SpecialsList } from "../Products/data";
import Products from "../Products/Products";
import "../Products/ProductElements.css";

function SpecialsSection() {
  return (
    <div className="product-container">
      <h2 className="product-heading">
        Specials This Week For The Menu And Desserts
      </h2>
      <div className="product-wrapper">
        <div className="product-card">
          {SpecialsList.map((productList, key) => {
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
  );
}

export default SpecialsSection;
