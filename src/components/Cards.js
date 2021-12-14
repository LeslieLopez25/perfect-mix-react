import React from "react";
import CardItem from "./CardItem";
import "./CardsElements.js";
import {
  Card,
  CardsContainer,
  CardsWrapper,
  CardsItems
} from "./CardsElements";
import Img1 from "../images/display-1.jpg";
import Img2 from "../images/display-2.jpg";
import Img3 from "../images/display-3.jpg";
import Img4 from "../images/display-4.jpg";
import Img5 from "../images/display-4.jpg";

function Cards() {
  return (
    <Card>
      <h1>Check out these EPIC Destinations!</h1>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
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
          </CardsItems>
          <CardsItems>
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
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Card>
  );
}

export default Cards;
