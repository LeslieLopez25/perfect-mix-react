import React from "react";
import { Button } from "../Button/Button";
import "../Products/ProductElements.css";

export default function Product({ image, name, desc, price, addToCart }) {
  return (
    <>
      <div className="productLineUp">
        <img src={image} alt={name} />
        <h3> {name} </h3>
        <p> {desc} </p>
        <h4> ${price} </h4>
        <div className="product-btns">
          <Button
            type="submit"
            onClick={() => addToCart(Product)}
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
