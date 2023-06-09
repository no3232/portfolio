import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* css reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    font-size: 16px;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: normal;
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
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1 {
    font-family: AgroBold, sans-serif;
    font-size: 2.5rem;
  }

  h2 {
    font-family: AgroBold, sans-serif;
    font-size: 2rem;
  }

  h3 {
    font-family: AgroMedium, sans-serif;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    &:hover &:active &:-webkit-any-link {
      color: #000;
      text-decoration: none;
    }
  }

  button {
    all: unset
  }
  /* @font-face {
        font-family: 'AgroBold';
        font-style: normal;
        src: url('/fonts/SBAgroB.ttf') format('truetype');
  }
  @font-face {
        font-family: 'AgroLight';
        font-style: normal;
        src: url('/fonts/SBAgroL.ttf') format('truetype');
  }
  @font-face {
        font-family: 'AgroMedium';
        font-style: normal;
        src: url('/fonts/SBAgroM.ttf') format('truetype');
  } */
  
  `;

export default GlobalStyle;
