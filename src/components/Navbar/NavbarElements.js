import styled from "styled-components";
import { FaBattleNet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #682c0e;
  font-size: 19px;
  position: sticky;
  top: 0;
  height: 80px;
  z-index: 100;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavIcon = styled(FaBattleNet)`
  margin-right: 8px;
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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    background: #682c0e;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    width: 100%;
    height: 562.5px;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #f58b54;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  height: 100%;

  &:hover {
    color: #f58b54;
  }

  @media screen and (max-width: 960px) {
    display: table;
    text-align: center;
    padding: 32px;
    width: 100%;

    &:hover {
      color: #f58b54;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
