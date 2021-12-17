import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "../Hero/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="left">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
        <div className="right">
          <div className="hero-img"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
