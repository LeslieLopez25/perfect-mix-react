import React from "react";
import "../../../App.css";
import "../../pages/Products/ProductElements.css";

export default function Products(props) {
  const { product } = props;
  return (
    <div>
      <img className="small" src="{product.image}" alt="{product.name}" />
      <h3>{product.name}</h3>
      <div>{product.desc}</div>
      <div>${product.price}</div>
    </div>
  );
}
