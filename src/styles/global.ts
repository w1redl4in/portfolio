import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; // font-size: 15px;
    }

    @media (max-width:  720px) {
      font-size: 87.5%;
    }
  }

  h1, h2, h3, h4, h5, h6, span, strong, u, b {
     &::selection {
       background: ${({ theme }) => theme.colors.black900};
       color: ${({ theme }) => theme.colors.white};
     }
  }


  body {
    height: auto;
    /* background */
    /* color */
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  body, #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%;
  }

  body, input, button {
    font: 1rem 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
