import React, { useEffect } from "react";
import "../Products/ProductElements.css";

export default function Product( {item} ) {
  const { image, title, desc, price } = item;
  
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
      </div>
    </>
  );
}
