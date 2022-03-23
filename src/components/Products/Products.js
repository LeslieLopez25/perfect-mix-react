import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import "../Products/ProductElements.css";

export default function Products({ image, name, desc, price, addToCart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="productLineUp">
        <img src={image} alt={name} />
        <h3> {name} </h3>
        <p> {desc} </p>
        <h4> ${price} </h4>
        <div className="product-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={addToCart}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
}
