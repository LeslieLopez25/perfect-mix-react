import React from "react";

function Product({ image, name, desc, price }) {
  return (
    <div className="productList">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {desc} </p>
      <p> ${price} </p>
    </div>
  );
}

export default Product;
