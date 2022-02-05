import React from "react";
import { Button } from "../Button";
import "../Products/ProductElements.css";

function Product({ image, name, desc, price }) {
  return (
    <div className="productList">
      <img src={image} alt={image} />
      <h3> {name} </h3>
      <p> {desc} </p>
      <h4> ${price} </h4>
      <div className="product-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default Product;
