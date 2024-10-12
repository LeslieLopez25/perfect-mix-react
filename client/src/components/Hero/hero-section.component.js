import React, { useEffect, useState } from "react";

import "../../App.css";
import "../Hero/hero-section.styles.css";

const images = [
  require("../../assets/images/slider.jpg"),
  require("../../assets/images/slider-2.jpg"),
  require("../../assets/images/slider-3.jpg"),
  require("../../assets/images/slider-4.jpg"),
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="intro">
        <h1>Food from scratch with love from our kitchens</h1>
        <p>Come Check Us Out!</p>
      </div>
    </div>
  );
}
