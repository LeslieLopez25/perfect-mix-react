import styled from "styled-components";
import HeroImg from "../../images/hero-img.png";

export const HeroContainer = styled.div`
  background: #682c0e;
  height: 100%;
`;

HeroContent = styled.div`
  height: calc(100% - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  padding: 0 32px;
  width: 650px;
  height: 600px;
  max-height: 100%;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: clamp(40px, 10vw, 80px);
  font-family: "Signika", sans-serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px #1dacd6;
  margin-bottom: 32px;
  box-shadow: 3px 5px #006994;
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: clamp(32px, 2.5vw, 48px);
  font-family: "Signika", sans-serif;
  text-shadow: 1px 1px 2px #1dacd6;
  margin-bottom: 32px;
`;

export const HeroBtn = styled.button`
  background: #1dacd6;
  color: #fff;
  font-size: 22px;
  font-family: "Signika", sans-serif;
  padding: 16px 64px;
  border: none;
  transition: 0.2s ease-out;

  &:hover {
    background: #006994;
    color: #1dacd6;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
