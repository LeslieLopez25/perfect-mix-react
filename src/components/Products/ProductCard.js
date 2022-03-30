import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import "../Products/ProductElements.css";

export default function Product({ item, handleClick }) {
  const item = { image, title, desc, price };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="productLineUp">
        <img src={image} alt={title} />
        <h3> {title} </h3>
        <p> {desc} </p>
        <h4> ${price} </h4>
        <div className="product-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={() => handleClick(item)}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
}
