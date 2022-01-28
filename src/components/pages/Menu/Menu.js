import React from "react";
import "../../../App.css";
import { Button } from "../../Button";
import Img1 from "../../../images/food-1.jpg";
import Img2 from "../../../images/food-2.jpg";
import Img3 from "../../../images/food-3.jpg";
import Img4 from "../../../images/food-4.jpg";
import { MenuList } from "../../Products/data";
import "../../pages/Menu/MenuElements.css";

export default function Menu() {
  return (
    <div className="specials-container">
      <h2 className="specials-heading">Menu</h2>
      <div className="specials-wrapper">
        <div className="menuList">
          {ProductList.map((productList, key) => {
            return <div> </div>;
          })}
        </div>
        <div className="specials-card">
          <img className="specials-img" src={Img1} alt="seafood-enchiladas" />
          <div className="specials-info">
            <h3 className="specials-name">Seafood Enchiladas</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$14.99</p>
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
          <img className="specials-img" src={Img2} alt="tacos-de-carne-asada" />
          <div className="specials-info">
            <h3 className="specials-name">Tacos de Carne Asada</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$10.99</p>
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
          <img className="specials-img" src={Img3} alt="pozole-rojo" />
          <div className="specials-info">
            <h3 className="specials-name">Pozole Rojo</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$14.99</p>
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
          <img className="specials-img" src={Img4} alt="carnitas" />
          <div className="specials-info">
            <h3 className="specials-name">Carnitas</h3>
            <p className="description">
              Pizza ipsum dolor amet lasagna sauteed onions hawaiian, bbq rib
              chicken and bacon peppers chicken wing.
            </p>
            <p className="price">$11.99</p>
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
