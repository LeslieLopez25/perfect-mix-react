import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "../SpecialsSection/SpecialArea1.css";

function SpecialsSection() {
  return (
    <div className="specials-container">
      <h1>Specials This Week For The Menu And Desserts</h1>
      <div className="specials-wrapper">
        <div className="specials-img menu">
          <h2 className="product-name">tacos de birria</h2>
          <p className="description">What are you waiting for?</p>
          <p className="price">$5.99</p>
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
      <div className="specials-wrapper">
        <div className="specials-img dessert">
          <h3 className="product-name">tacos de birria</h3>
          <p className="description">What are you waiting for?</p>
          <p className="price">$5.99</p>
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
    </div>
  );
}

export default SpecialsSection;
