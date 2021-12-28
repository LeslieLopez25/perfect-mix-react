import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Img1 from "../../images/menu-special.jpg";
import Img2 from "../../images/dessert-special.jpg";
import "../SpecialsSection/SpecialsArea1.css";

function SpecialsSection() {
  return (
    <div className="specials-container">
      <h2 className="specials-heading">
        Specials This Week For The Menu And Desserts
      </h2>
      <div className="specials-wrapper">
        <div className="specials-card">
          <img className="specials-img" src={Img1} alt="tacos-de-birria" />
          <div className="specials-info">
            <h3 className="specials-name">Tacos de Birria</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
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
        <div className="specials-card">
          <img className="specials-img" src={Img2} alt="churros" />
          <div className="specials-info">
            <h3 className="specials-name">Churros</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$2.99</p>
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
    </div>
  );
}

export default SpecialsSection;
