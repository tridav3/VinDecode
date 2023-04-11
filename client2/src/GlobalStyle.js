import { createGlobalStyle } from "styled-components";
import { COLORS } from "./Styling";

export default createGlobalStyle`
  :root {
    --color-cadmium-red: #D80026;
    --color-alabama-crimson: #AA001E;
    --color-orange: #F79D00;
    --color-selective-yellow: #FDBB01;
    --color-desert-sand: #E3C4A6;
    --font-heading: 'Permanent Marker', Arial, Helvetica, sans-serif;
    --font-body: 'Kosugi', Arial, Helvetica, sans-serif;
    --padding-page: 24px;
  }

  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
    font-family: sans-serif;
    background-color: ${COLORS.MutedGreen};
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  /* Additional Styles */
  h1, h2, h3, label, button {
    /* Add any styles here */
  }

  p, a, li, blockquote, input {
    /* Add any styles here */
  }

  input {
    /* Add any styles here */
  }
`;
