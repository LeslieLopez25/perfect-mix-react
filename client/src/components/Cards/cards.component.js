import React from "react";
import CardItem from "../Cards/card-item.component";
import Img1 from "../../assets/images/display-1.jpeg";
import Img2 from "../../assets/images/display-2.jpeg";
import Img3 from "../../assets/images/display-3.jpeg";
import Img4 from "../../assets/images/display-4.jpeg";
import Img5 from "../../assets/images/display-5.jpeg";

import "./cards.styles.css";

// Cards component renders a collection of CardItem components
export default function Cards() {
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
            />
            <CardItem
              src={Img2}
              text="Delicious Fruits Mixed With Our Main Menu And Desserts"
              label="Fresh"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Img3}
              text="Delicious And Cold Beverages"
              label="Refreshing"
            />
            <CardItem
              src={Img4}
              text="Hear The Sizzle, Savor The Flavor"
              label="Mouthwatering"
            />
            <CardItem
              src={Img5}
              text="Eat Fresh And Delicious Vegetables"
              label="Natural"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
