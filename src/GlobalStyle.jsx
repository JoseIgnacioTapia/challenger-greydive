import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-font: 'Bitter', serif;
    --primary-color: #017374;
    --secondary-color: #D0FEFE;
    --background-color: #1F3B4D;
    --black: #333;
    --white: #FFF;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,*::before, *::after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: var(--main-font);
    background-color: var(--background-color);
  }
`;
