import React from "react";
import HeroSection from "../../components/Hero/hero-section.component";
import Cards from "../../components/Cards/cards.component";
import { Specials } from "../../components/export-specials-section.component";
import {
  Banner,
  Video,
} from "../../components/export-banner-section.component";

import "../../App.css";

// // Renders the homepage that users see when they first visit the site
export default function Home() {
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
