import styled from "react";
import { Container } from "../globalStyles";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background: linear-gradient(
    to right,
    hsl(32.9, 100%, 50%, 0.2),
    hsl(3.4, 98.7%, 31.2%, 0.1)
  );
  padding: 4rem;

  h1 {
    text-align: center;
  }
`;

export const CardsContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    width: 84%;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  margin: 3.12rem 0 2.81rem;
`;

export const CardsItems = styled.ul`
  margin-bottom: 1.5rem;

  @media only screen and(min-width: 1024px) {
    display: flex;
  }

  @media only screen and(max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const CardsItem = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
`;

export const CardsItemLink = styled(Link)`
  display: flex;
  flex-flow: column;
  text-decoration: none;
  box-shadow: 0 6px 20px hsl(219.2, 100 %, 61 %, 0.17);
  -webkit-filter: drop - shadow(0 6px 20px hsl(219.2, 100 %, 61 %, 0.017));
  filter: drop - shadow(0 6px 20px hsl(219.2, 100 %, 61 %, 0.017));
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
`;

export const CardsItemPicWrap = styled.figure`
  position: relative;
  padding-top: 67%;
  width: 100%;
  overflow: hidden;

  &::after {
    content: attr(data-category);
    background-color: #5f5d;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    margin-left: 0.62rem;
    padding: 0.37rem 0.5rem;
    position: absolute;
    bottom: 0;
    max-width: calc((100%) - 3.75rem);
    box-sizing: border-box;
  }
`;

export const FadeImg = styled(Animation)`
  animation-name: fade - img;
  animation-duration: 2s;
`;

export const CardsItemImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardsItemInfo = styled.div`
  padding: 1.25rem 1.87rem 1.87rem;
`;

export const CardsItemText = styled.h5`
  color: hsl(224.6, 32.1%, 21.4%);
  font-size: 1.12rem;
  line-height: 1.5rem;
`;
