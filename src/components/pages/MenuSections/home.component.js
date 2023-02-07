import React from "react";
import "../../../App.css";
import Cards from "../../Cards/cards.component";
import { Specials1, Specials2 } from "../../ExportSpecialsSection";
import { Banner, Banner2, Video } from "../../ExportBannerSection";
import HeroSection from "../../../components/Hero/heroSection.component";

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
