import React from "react";
import "../../../App.css";
import { Button } from "../../Button";
import "../../pages/Products/ProductElements.css";

export default function Products({heading, data}) {
  return (
    <div className="Product-container">
      <h2 className="specials-heading">{heading}</h2>
      <div className="specials-wrapper">
        {data.map((product, Products) => {
        <div className="specials-card" key={Products}>
          <img className="specials-img" src={product.img} alt={product.alt} />
          <div className="specials-info">
            <h3 className="specials-name">{product.name}</h3>
            <p className="description">
              {product.desc}
            </p>
            <p className="price">{product.price}</p>
            <div className="specials-btns">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                Add To Cart
              </Button>
            </div>
          </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Products;
