import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "../Hero/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="left">
        <h1>Food from scratch with love from our kitchens</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Link to="/cart">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Place Order
            </Button>
          </Link>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default HeroSection;
