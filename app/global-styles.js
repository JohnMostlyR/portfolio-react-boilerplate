import { injectGlobal } from 'styled-components';
import { theme } from './styles/theme';
import {
  BASE_FONT_REGULAR,
  BASE_FONT_SIZE,
  BASE_LETTER_SPACING,
  BASE_LINE_HEIGHT,
  FONT_STACK_SANS_SERIF,
} from './styles/typography';

/**
 * Global Styles
 *
 * 1. Make everything scale incrementally and proportionately relative to the viewport
 * 2. Be very careful about performance!
 *    @see {@link https://css-tricks.com/almanac/properties/t/text-rendering/#article-header-id-2|Performance}
 * 3. Hide elements that are irrelevant for print
 * 4. Visually hide an element by adding the -hidden- and -aria-hidden- attribute and setting
 *    the latter to -false-
 */

/* eslint no-unused-expressions: 0 */
injectGlobal`
  *:focus {
    outline: #f90 dotted 2px;

    @media (min-width: 1024px) {
      outline: #f90 dotted 4px;
    }
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    background-attachment: fixed;
    background-color: ${theme.site.background.color};
    background-image:
      url(${theme.site.background.image}),
      ${theme.site.background.gradient};
    background-size: ${theme.site.background.size.join(',')};
    background-repeat: ${theme.site.background.repeat.join(',')};

    @media (min-width: 600px) {
      font-size: 112%;
    }
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${theme.primaryColor};
    font-size: ${BASE_FONT_SIZE};
    letter-spacing: ${BASE_LETTER_SPACING};
    line-height: ${BASE_LINE_HEIGHT};
    text-rendering: optimizeLegibility; /* [2] */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%; /* stylelint-disable-line property-no-vendor-prefix */
    ${BASE_FONT_REGULAR};
  }

  @media print { /* [3] */
    body > *:not(main) {
      display: none;
    }
  }

  body.fontLoaded {
    font-family: ${['"Noto Sans"'].concat(FONT_STACK_SANS_SERIF).join(',')};

    & input,
    & textarea,
    & select,
    & button {
      font-family: ${['"Noto Sans"'].concat(FONT_STACK_SANS_SERIF).join(',')};
    }
  }

  li,
  dt,
  dd,
  br,
  th,
  td {
    margin-top: 0;
  }

  [href="#main"] {
    display: inline-block;
    position: absolute;
    right: 100%;
    top: 0;
    z-index: 99999;
    background-color: ${theme.site.background.color};
    color: inherit;
    padding: 0.25rem;
  }
  
  [href="#main"]:focus {
    right: auto;
  }

  [hidden][aria-hidden="false"] { /* [4] */
    display: inherit !important;
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
