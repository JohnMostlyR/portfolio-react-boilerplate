import styled from 'styled-components';
import {
  BASE_FONT_BOLD,
  BASE_LINE_HEIGHT,
  MODULAR_SCALE_FACTOR,
} from '../../styles/typography';

import { theme } from '../../styles/theme';
import { SVGBackgroundImage } from '../../styles/tools';

const { inlineLink: { color, textShadowColor } } = theme.projectDetails;
const H2_LINE_HEIGHT = 1.2;
const EXTERNAL_LINK_ICON =
  SVGBackgroundImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true">
    <path
      fill="${color}"
      d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"
    />
  </svg>`);

const Article = styled.article`
  max-width: 51em;

  a {
    position: relative;
    background-color: transparent;
    background-image: linear-gradient(currentColor, currentColor);
    background-origin: padding-box;
    background-position: center bottom 10%;
    background-repeat: no-repeat;
    background-size: 100% 1.5px;
    color: ${color};
    cursor: pointer;
    text-decoration: none;
    text-shadow:
      3px 0 ${textShadowColor},
      2px 0 ${textShadowColor},
      1px 0 ${textShadowColor},
      -1px 0 ${textShadowColor},
      -2px 0 ${textShadowColor},
      -3px 0 ${textShadowColor};
    touch-action: manipulation;
    transition: color 0.1s ease-out;
  
    @supports (text-decoration-skip-ink: auto) {
      background: none;
      text-decoration: underline;
      text-decoration-skip-ink: auto; /* stylelint-disable-line property-no-unknown */
      text-shadow: none;
    }

    &[href^=http] {
      padding-right: 1em;

      &::after {
        content: "";
        height: 1em;
        position: absolute;
        width: 1em;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 0.75em;
        ${EXTERNAL_LINK_ICON}
      }
    }
  }

  > h2 {
    font-size: ${MODULAR_SCALE_FACTOR ** 3}rem;
    line-height: ${() => H2_LINE_HEIGHT};
    ${BASE_FONT_BOLD}
  }

  > p {
    line-height: ${BASE_LINE_HEIGHT};
    margin: ${BASE_LINE_HEIGHT}em 0;
    word-break: break-word;

    @media(min-width: 950px) {
      line-height: ${BASE_LINE_HEIGHT * 1.1};
    }
  }

  ul {
    appearance: none !important;
    margin: 0 !important;

    li {
      line-height: ${BASE_LINE_HEIGHT * 1.2};
      margin-top: 0 !important;
    }
  }
`;

export default Article;
