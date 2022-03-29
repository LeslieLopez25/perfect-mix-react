import React from "react";
import "../../../App.css";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductElements.css";

export default function Appetizers({ data }) {
  return (
    <>
      <div className="product-container">
        <h2 className="product-heading">Appetizers</h2>
        <div className="product-wrapper">
          <div className="product-card">
            {data.map((data, key) => {
              return (
                <ProductCard
                  key={key}
                  image={data.image}
                  name={data.name}
                  desc={data.desc}
                  price={data.price}
                  addToCart={data.addToCart(data)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
