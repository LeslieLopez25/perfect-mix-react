import React from "react";
import { Button } from "../Button/Button";
import productList from "./../Products/Products";
import "../Products/ProductElements.css";

function Product({ addToCart, image, name, desc, price }) {
  return (
    <div className="productList">
      <img src={image} alt={name} />
      <h3> {name} </h3>
      <p> {desc} </p>
      <h4> ${price} </h4>
      <div className="product-btns">
        <Button
          onClick={() => addToCart(productList)}
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
