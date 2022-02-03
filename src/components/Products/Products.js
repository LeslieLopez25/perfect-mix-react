import React from "react";

function Product({ image, name, desc, price }) {
  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="product-card">
          <img src={image} alt={image} />
          <h1> {name} </h1>
          <p> {desc} </p>
          <h3> ${price} </h3>
        </div>
      </div>
    </div>
  );
}

export default Product;
