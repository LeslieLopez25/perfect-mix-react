import React from "react";
import "../../App.css";
import { Button } from "../Button/button.component";
import { Link } from "react-router-dom";
import "../Hero/hero-section.styles.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="left">
        <h1>Food from scratch with love from our kitchens</h1>
        <p>Check Us Out!</p>
        <div className="hero-btns">
          <Link to="/gallery">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Gallery
            </Button>
          </Link>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
