import React from "react";
import "../../App.css";
import { Button } from "../Button";
import {
  HeroContainer,
  HeroLeft,
  HeroBtns,
  HeroRight,
  HeroSlogan,
  HeroText
} from "../Hero/HeroElements";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroSlogan>Food from scratch with love from our kitchens</HeroSlogan>
        <HeroText>What are you waiting for?</HeroText>
        <HeroBtns>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Place Order
          </Button>
        </HeroBtns>
      </HeroLeft>
      <HeroRight />
    </HeroContainer>
  );
}

export default HeroSection;
