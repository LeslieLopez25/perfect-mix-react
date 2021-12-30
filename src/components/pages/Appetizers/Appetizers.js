import React from "react";
import "../../../App.css";
import { Button } from "../../Button";
import Img1 from "../../../images/appetizers-1.jpg";
import Img2 from "../../../images/appetizers-2.jpg";
import Img3 from "../../../images/appetizers-3.jpg";
import Img4 from "../../../images/appetizers-4.jpg";
import "../../pages/Appetizers/AppetizersElements.css";

export default function Appetizers() {
  return (
    <div className="specials-container">
      <h2 className="specials-heading">Appetizers</h2>
      <div className="specials-wrapper">
        <div className="specials-card">
          <img className="specials-img" src={Img1} alt="taco-cups" />
          <div className="specials-info">
            <h3 className="specials-name">Taco Cups</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$0.99</p>
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
          <img className="specials-img" src={Img2} alt="guacamole" />
          <div className="specials-info">
            <h3 className="specials-name">Guacamole</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$1.99</p>
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
          <img className="specials-img" src={Img3} alt="ceviche" />
          <div className="specials-info">
            <h3 className="specials-name">Ceviche</h3>
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
          <img className="specials-img" src={Img4} alt="taquitos" />
          <div className="specials-info">
            <h3 className="specials-name">Taquitos</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$0.99</p>
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
