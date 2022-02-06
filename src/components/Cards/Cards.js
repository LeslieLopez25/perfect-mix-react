import React from "react";
import "./Cards.css";
import CardItem from "../Cards/CardItem";
import Img1 from "../../images/display-1.jpg";
import Img2 from "../../images/display-2.jpg";
import Img3 from "../../images/display-3.jpg";
import Img4 from "../../images/display-4.jpg";
import Img5 from "../../images/display-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>What Are You Eating Today?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img1}
              text="Fresh Tortillas Made Everyday"
              label="Homemade"
              path="/appetizers"
            />
            <CardItem
              src={Img2}
              text="Delicious Fruits Mixed With Our Main Menu And Desserts"
              label="Fresh"
              path="/Desserts"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Img3}
              text="Delicious And Cold Beverages"
              label="Refreshing"
              path="/beverages"
            />
            <CardItem
              src={Img4}
              text="Hear The Sizzle, Savor The Flavor"
              label="Mouthwatering"
              path="/menu"
            />
            <CardItem
              src={Img5}
              text="Eat Fresh And Delicious Vegetables"
              label="Natural"
              path="/cart"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
