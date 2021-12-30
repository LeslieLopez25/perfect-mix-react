import React from "react";
import "../../../App.css";
import { Button } from "../../Button";
import Img1 from "../../../images/dessert-1.jpg";
import Img2 from "../../../images/dessert-2.jpg";
import Img3 from "../../../images/dessert-3.jpg";
import Img4 from "../../../images/dessert-4.jpg";
import "../../pages/Desserts/DessertsElements.css";

export default function Desserts() {
  return (
    <div className="specials-container">
      <h2 className="specials-heading">Desserts</h2>
      <div className="specials-wrapper">
        <div className="specials-card">
          <img className="specials-img" src={Img1} alt="tres-leche-pastel" />
          <div className="specials-info">
            <h3 className="specials-name">Tres Leches Pastel</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$4.99</p>
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
          <img className="specials-img" src={Img2} alt="dessert-nachos" />
          <div className="specials-info">
            <h3 className="specials-name">Dessert Nachos</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$6.99</p>
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
          <img className="specials-img" src={Img3} alt="paletas" />
          <div className="specials-info">
            <h3 className="specials-name">Paletas</h3>
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
          <img className="specials-img" src={Img4} alt="fresas-con-crema" />
          <div className="specials-info">
            <h3 className="specials-name">Fresas Con Crema</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$3.99</p>
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
