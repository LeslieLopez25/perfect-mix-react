import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Img1 from "../images/img-8.jpg";
import Img2 from "../images/img-1.jpg";
import Img3 from "../images/img-2.jpg";
import Img4 from "../images/img-3.jpg";
import Img5 from "../images/img-4.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img1}
              text="Explore The Amazon Jungle And All Its Wonder"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Img2}
              text="Travel Through The Isles Of Scilly"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Img3}
              text="Set Sail In The Pacific Ocean Visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={Img4}
              text="Take A Step Into Ancient Japan and Visit Mt. Fuji "
              label="Venture"
              path="/products"
            />
            <CardItem
              src={Img5}
              text="Explore The Beautiful Mountainside And Gorgeous Lake At Mt. Chephren in Canada"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
