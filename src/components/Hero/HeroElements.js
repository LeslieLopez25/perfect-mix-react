import styled from "styled-components";

export const HeroContainer = styled.div`
  background-image: url("../../images/pattern.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 570px;
  box-shadow: inset 0 0 0 1000px hsl(197.5, 44.4%, 10.6%, 0.4);
  object-fit: contain;
`;

export const HeroLeft = styled.div`
  width: 500px;
  max-height: 500px;
  display: block;
  position: relative;
  left: -300px;
  top: 230px;
`;

export const HeroSlogan = styled.h1`
  color: #fff;
  font-size: 50px;
  margin-top: -100px;
  text-transform: uppercase;
  box-shadow: 8px 8px hsl(120, 60.7%, 33.9%, 0.7);
  margin-bottom: 30px;
  background-color: hsl(20.5, 89%, 64.5%, 0.7);
  border-radius: 4px;

  @media screen and (max-width: 960px) {
    font-size: 70px;
    margin-top: -150px;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-top: -100px;
  }
`;

export const HeroText = styled.p`
  color: #fff;
  font-size: 32px;
  font-family: "Signika", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
  margin-top: 8px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeroRight = styled.div`
  width: 500px;
  max-height: 500px;
  position: relative;
  left: 650px;
  bottom: 360px;
  content: url("../../images/hero-img.png");
`;

export const HeroBtns = styled.div`
  margin-top: 32px;
  text-align: center;
`;
