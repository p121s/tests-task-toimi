import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Nunito', sans-serif;
        font-size: 13px;
    }

    aside {
        flex: 0 0 270px;
        max-width: 270px;
        min-width: 270px;
        width: 270px;
      }
`;