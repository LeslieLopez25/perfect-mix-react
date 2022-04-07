import React from "react";
import "../../../App.css";
import Cards from "../../Cards/Cards";
import { Specials1, Specials2 } from "../../ExportSpecialsSection";
import { Banner, Banner2, Video } from "../../ExportBannerSection";
import HeroSection from "../../../components/Hero/HeroSection";

export default function Home() {
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
