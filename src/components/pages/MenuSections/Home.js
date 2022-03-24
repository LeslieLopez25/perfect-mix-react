import React from "react";
import "../../../App.css";
import Cards from "../../Cards/Cards";
import { Specials1, Specials2 } from "../../ExportSpecialsSection";
import { SpecialsList, SpecialsList2 } from "../../Products/data";
import { Banner, Video } from "../../ExportBannerSection";
import HeroSection from "../../../components/Hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specials1 data={SpecialsList} />
      <Banner />
      <Cards />
      <Video />
      <Specials2 data={SpecialsList2} />
    </>
  );
}
