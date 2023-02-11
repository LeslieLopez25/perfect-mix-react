import React, { useContext } from "react";
// import { Button } from "../Button/button.component";
import { ShopContext } from "../Context/shop-context";

export const CartItem = (props) => {
  const { id, img, title, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={img} alt={title} />
      <div className="description">
        <h3> {title} </h3>
        <h4> ${price} </h4>
        <div className="countHandler">
          <button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
