import React from "react";
import { Button } from "../Button/Button";
import products from "../Products/Products";
import "../Products/ProductElements.css";

export default function Product({ image, name, desc, price }) {
  return (
    <>
      <div className="productLineUp">
        <img src={image} alt={name} />
        <h3> {name} </h3>
        <p> {desc} </p>
        <h4> ${price} </h4>
        <div className="product-btns">
          <Button
            onClick={() => addToCart(products)}
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
}
