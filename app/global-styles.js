import { injectGlobal } from 'styled-components';
import { baseFontRegular } from './styles/templates/typography';
import backGround from './images/polka-dots.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    -webkit-font-smoothing: subpixel-antialiased;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    margin: 0;
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }
  
  abbr[title],
  dfn[title] {
    cursor: help;
  }
  
  u,
  ins {
    text-decoration: none;
  }
  
  ins {
    border-bottom: 1px solid;
  }

  html {
    line-height: 1.5;
    overflow-x: hidden;
    height: 100%;
    background-attachment: fixed;
    background-color: #fff;
    background-image:
      url(${backGround}),
      linear-gradient(-120deg, #fff, #d7f1ff);
    background-size: 100px, contain;
    background-repeat: repeat, no-repeat;
  }

  body {
    height: 100%;
    color: #465a65;
    ${baseFontRegular};
  }
  
  body,
  p {
    font-size: 18px;
  }

  [hidden][aria-hidden="false"] {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    border: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
  }

  #app {
    height: 100%;
    width: 100%;
  }
`;
