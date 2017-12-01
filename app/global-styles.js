import { injectGlobal } from 'styled-components';
import { sizes } from './styles/templates/mediaQueries';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  dl, dd, ol, ul,
  form, fieldset, legend,
  figure,
  table, th, td, caption,
  hr {
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
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
    font-size: .7em;
    line-height: 1.5;
    overflow-x: hidden;
    height: 100%;
    background-attachment: fixed;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e5e5e5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"),
    linear-gradient(-120deg, #FFF, #D7F1FF);
    background-size: 100px, contain;
    background-repeat: repeat, no-repeat;
  }

  body {
    height: 100%;
    color: #575756;
    font-family: 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, freesans, sans-serif;
  }

  #app {
    height: 100%;
    width: 100%;
  }
  
  @media (min-width: ${sizes.m}px) {
    html {
      font-size: 1em;
    }
  }
`;
