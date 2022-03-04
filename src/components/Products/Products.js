import React from "react";
import { Button } from "../Button/Button";
import "../Products/ProductElements.css";

export default function Product(props, { addToCart }) {
  return (
    <>
      <div className="productLineUp">
        <img src={props.image} alt={props.name} />
        <h3> {props.name} </h3>
        <p> {props.desc} </p>
        <h4> ${props.price} </h4>
        <div className="product-btns">
          <Button
            addToCart={addToCart}
            onClick={() => addToCart(props.products)}
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
