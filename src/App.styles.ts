import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
    display: flex;
    justify-content: center;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
