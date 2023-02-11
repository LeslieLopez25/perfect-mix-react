import React, { useContext } from "react";
import { ShopContext } from "../Context/shop-context";

export const CartItem = (props) => {
  const { id, img, title, desc, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="productLineUp">
        <img src={img} alt={title} />
        <h3> {title} </h3>
        <p> {desc} </p>
        <h4> ${price} </h4>
        <button
          className="countHandler"
          onClick={() => removeFromCart(id)}
        ></button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  );
};
