import React from "react";
import "../../../App.css";
import { Button } from "../../Button";
import Img1 from "../../../images/drink-1.jpg";
import Img2 from "../../../images/drink-2.jpg";
import Img3 from "../../../images/drink-3.jpg";
import Img4 from "../../../images/drink-4.jpg";
import "../../pages/Beverages/BeveragesElements.css";

export default function Beverages() {
  return (
    <div className="specials-container">
      <h2 className="specials-heading">Beverages</h2>
      <div className="specials-wrapper">
        <div className="specials-card">
          <img className="specials-img" src={Img1} alt="cappuccino" />
          <div className="specials-info">
            <h3 className="specials-name">Cappuccino</h3>
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
          <img className="specials-img" src={Img2} alt="orange-juice" />
          <div className="specials-info">
            <h3 className="specials-name">Orange Juice</h3>
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
          <img className="specials-img" src={Img3} alt="coca-cola" />
          <div className="specials-info">
            <h3 className="specials-name">Coca Cola</h3>
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
          <img className="specials-img" src={Img4} alt="corona-extra" />
          <div className="specials-info">
            <h3 className="specials-name">Corona Extra</h3>
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
