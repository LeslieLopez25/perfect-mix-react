import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Img1 from "../../images/appetizers-1.jpg";
import Img2 from "../../images/appetizers-2.jpg";
import Img3 from "../../images/appetizers-3.jpg";
import Img4 from "../../images/appetizers-4.jpg";
import "../pages/AppetizersElements.css";

export default function Appetizers() {
  return (
    <div className="specials-container">
      <h2 className="specials-heading">Appetizers</h2>
      <div className="specials-wrapper">
        <div className="specials-card">
          <img className="specials-img" src={Img1} alt="Tamales" />
          <div className="specials-info">
            <h3 className="specials-name">Tamales</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$1.50</p>
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
            <h3 className="specials-name">Red Wine</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$9.99</p>
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
      <div className="specials-wrapper">
        <div className="specials-card">
          <img className="specials-img" src={Img3} alt="Tamales" />
          <div className="specials-info">
            <h3 className="specials-name">Tamales</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$1.50</p>
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
          <img className="specials-img" src={Img4} alt="churros" />
          <div className="specials-info">
            <h3 className="specials-name">Red Wine</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$9.99</p>
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
