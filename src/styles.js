import "./index.css";
import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Surt';
    font-size: 1rem;
    background-color: #E9E6E4;
    color: #121212;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    
  }
`;

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  width: 100vw;
  z-index: 1;
  pointer-events: none;
`;

export const Italic = styled.span`
  font-family: "Reckless Neue TRIAL";
  font-style: italic;
  font-size: 2rem;
  letter-spacing: -1px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: red;
  }
`;
