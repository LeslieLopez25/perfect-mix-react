import styled from "styled-components";
import { FaMortarPestle } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #682c0e;
  font-size: 20px;
  position: sticky;
  top: 0;
  height: 80px;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  height: 80px;
`;

export const NavLogo = styled.div`
  display: flex;
  justify-self: start;
  align-items: center;
  background: linear-gradient(90deg, #f58b54 0%, #228b22 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 20px;
    left: 40px;
  }
`;

export const NavIcon = styled(FaMortarPestle)`
  font-size: 30px;
  margin-bottom: 8px;
  margin-left: 8px;
`;

export const NavMenu = styled.ul`
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(6, auto);
  grid-gap: 10px;
  text-align: center;
  list-style: none;
  margin-right: 32px;
  width: 800px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: -100%;
    width: 100%;
    height: 530px;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;

  &:hover {
    color: #f58b54;
    border-bottom: 4px solid #f58b54;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    display: table;
    text-align: center;
    padding: 20px;
    top: 50px;
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    font-size: 29px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

// @media screen and (max-width: 960px) {
//   .NavbarItems {
//     position: relative;
//   }

//   .nav-menu.active {
//     background-color: #682c0e;
//     left: 0;
//     opacity: 1;
//     transition: all 0.5s ease;
//     z-index: 1;
//   }

//   .nav-links:hover {
//     background-color: #f58b54;
//     color: #080808;
//     border-radius: 0;
//   }

//   .nav-links-mobile {
//     display: block;
//     background-color: transparent;
//     color: #fff;
//     font-size: 24px;
//     text-align: center;
//     text-decoration: none;
//     margin: 70px auto;
//     padding: 14px 20px;
//     border-radius: 4px;
//     border: 1px solid #1dacd6;
//     width: 80%;
//     transition: all 0.3s ease-out;
//   }

//   .nav-links-mobile:hover {
//     background: #1dacd6;
//     color: #080808;
//     transition: 250ms;
//   }
// }
