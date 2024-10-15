import React from "react";
import HeroSection from "../../components/Hero/hero-section.component";
import Cards from "../../components/Cards/cards.component";
import { Specials } from "../../components/export-specials-section.component";
import {
  Banner,
  Video,
} from "../../components/export-banner-section.component";

import "../../App.css";

export default function Home() {
  // What the home page when you click on the website will display first
  return (
    <>
      <HeroSection />
      <Cards />
      <Video />
      <Specials />
      <Banner />
    </>
  );
}
