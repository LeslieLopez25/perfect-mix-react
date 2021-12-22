import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Specials1 from "../SpecialsSection/SpecialsArea1";
import Specials2 from "../SpecialsSection/SpecialArea2";
import Banner from "../Banners/Banner";
import Video from "../Banners/VideoBanner";
import HeroSection from "../../components/Hero/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Specials1 />
      <Banner />
      <Cards />
      <Video />
      {/* <Specials2 /> */}
    </>
  );
}

export default Home;
