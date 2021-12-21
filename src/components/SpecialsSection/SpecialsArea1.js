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
          <p>What are you waiting for?</p>
          <p>$5.99</p>
          <div className="specials-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
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
