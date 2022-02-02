import React from "react";

function Product({ heading, image, name, desc, price }) {
  return (
    <div className="product-container">
      <h2 className="product-heading">{heading}</h2>
      <div className="product-wrapper">
        <div className="productList">
          <div style={{ backgroundImage: `url(${image})` }}> </div>
          <h1> {name} </h1>
          <p> {desc} </p>
          <p> ${price} </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
