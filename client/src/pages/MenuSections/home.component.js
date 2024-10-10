import React from "react";
import "../../App.css";
import Cards from "../../components/Cards/cards.component";
import {
  Specials1,
  Specials2,
} from "../../components/export-specials-section.component";
import {
  Banner,
  Banner2,
  Video,
} from "../../components/export-banner-section.component";
import HeroSection from "../../components/Hero/hero-section.component";

export default function Home() {
  // What the home page when you click on the website will display first
  return (
    <>
      <HeroSection />
      <Specials1 />
      <Banner />
      <Cards />
      <Video />
      <Specials2 />
      <Banner2 />
    </>
  );
}
