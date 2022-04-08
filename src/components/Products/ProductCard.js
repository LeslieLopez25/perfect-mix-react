import React, { useEffect } from "react";
import "../Products/ProductElements.css";

export default function Product({ item }) {
  // Created a function to handle the main properties of the products
  const { img, title, desc, price } = item;
  
  // To have the page start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // The main product card
    <>
      <div className="productLineUp">
        <img src={img} alt={title} />
        <h3> {title} </h3>
        <p> {desc} </p>
        <h4> ${price} </h4>
      </div>
    </>
  );
}
