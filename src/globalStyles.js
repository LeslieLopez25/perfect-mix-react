import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Signika', sans-serif;
    box-sizing: border-box;
}
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  max-width: 1300;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background: ${({ primary }) =>
    primary ? "hsl(193.6,76.1%,47.6%)" : "hsl(197.4,100%,29%)"};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  border: none;
  border-radius: 4px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: #fff;
    background-color: ${({ primary }) =>
      primary ? "hsl(197.4,100%,29%)" : "hsl(193.6, 76.1 %, 47.6 %)"};
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
