import React, { useContext, useEffect } from "react";
import { Button } from "../Button/button.component";
import { ShopContext } from "../context/shop-context";
import "../Products/product.styles.css";

export default function Product({ item }) {
  // Created a function to handle the main properties of the products
  const { id, img, title, desc, price } = item;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

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
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </Button>
      </div>
    </>
  );
}
