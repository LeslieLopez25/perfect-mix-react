import React from "react";
import "../../../App.css";
import { Button } from "../../Button";
import "../../pages/Products/ProductElements.css";

export default function Products(props) {
  const { product } = props;
  return (
    <div>
      <img className="small" src="{product.image}" alt="{product.name}" />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
