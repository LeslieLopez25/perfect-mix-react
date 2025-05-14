import React, { useEffect, useState } from "react";

import "../../App.css";
import "../Hero/hero-section.styles.css";

const images = [
  require("../../assets/images/slider.jpg"),
  require("../../assets/images/slider-2.jpg"),
  require("../../assets/images/slider-3.jpg"),
  require("../../assets/images/slider-4.jpg"),
];

// HeroSection component displays rotating background images with text overlay
export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0); // Tracks the currently displayed image index

  // Automatically change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="hero-container">
      {/* Render background image slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      {/* Overlay text content */}
      <div className="intro">
        <h1>Food from scratch with love from our kitchens</h1>
        <p>Come Check Us Out!</p>
      </div>
    </div>
  );
}
