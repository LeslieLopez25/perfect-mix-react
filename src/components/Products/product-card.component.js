import React, { useContext, useEffect } from "react";
import CartContext from "../../Context/CartContext";
import { Button } from "../Button/button.component";

import "../Products/product.styles.css";

export const Product = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(data);
  };

  // To have the page start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productLineUp">
      <img src={data.img} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
      <h4>${data.price.toFixed(2)}</h4>
      <Button buttonStyle="btn-secondary btn--large" onClick={handleClick}>
        Add to Cart
      </Button>
    </div>
  );
};
