import { createGlobalstyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: "Signika", sans-serif;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
}

p {
  font-family: "Signika",
    'Lucida Sans Unicode',
    'Lucida Grande',
    'Lucida Sans',
    Arial,
    sans-serif;
}
`;
