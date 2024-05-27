import React, { useContext, useEffect } from "react";

import "../Products/product.styles.css";
import CartContext from "../../Context/CartContext";

export const Product = (product) => {
  // Created a function to handle the main properties of the products
  const { id, img, title, desc, price } = product.data;
  const { addToCart } = useContext(CartContext);

  // To have the page start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productLineUp">
      <img src={img} alt={title} />
      <h3> {title} </h3>
      <p> {desc} </p>
      <h4> ${price.toFixed(2)} </h4>
      <button onClick={() => addToCart({ id, title, price })}>
        Add to Cart
      </button>
    </div>
  );
};
