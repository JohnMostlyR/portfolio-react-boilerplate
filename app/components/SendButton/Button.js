import styled from 'styled-components';
import { BASE_FONT_BOLD } from '../../styles/typography';
import { svgToURL } from '../../styles/tools';
import { theme } from '../../styles/theme';

const { button } = theme.form;
const handSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMinYMid">
    <path fill="${button.iconColor}" d="M19 30h-5a3.004 3.004 0 0 1-2.614-4.472 3 3 0 0 1-.62-4.528 2.987 2.987 0 0 1-.595-3H3c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501A3.004 3.004 0 0 1 15.001 2c.824 0 1.592.327 2.163.921l.022.023 6.815 7.474V8.999a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1.382l-4.553 2.276a1.006 1.006 0 0 1-.447.106zm8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8.236 0L24 25.382V13.387l-8.287-9.088a1.002 1.002 0 0 0-1.591 1.18c.01.017.02.033.029.051l3.732 7a1 1 0 0 1-.882 1.47h-14c-.551 0-1 .449-1 1s.449 1 1 1h10a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h4.764z"/>
  </svg>
`;

const Button = styled.button`
  position: relative;
  margin: 0 2rem;
  z-index: 2;
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  ${BASE_FONT_BOLD}

  > span {
    display: inline-block;
    background-color: ${button.backgroundColor};
    border: 1px solid ${button.backgroundColor};
    border-radius: 5px;
    color: ${button.color};
    cursor: pointer;
    padding: 8px;
  }

  &[disabled] > span {
    cursor: not-allowed !important;
  }

  &::after,
  &::before {
    position: absolute;
    content: "";
    height: 32px;
    top: 50%;
    width: 32px;
    z-index: -1;
    background-image: ${() => `url(${svgToURL(handSVG)})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    color: inherit;
    transition: transform 0.3s ease-in-out;
  }

  &::after {
    transform: translate3d(-100%, -50%, 0);
  }

  &::before {
    transform:
      translate3d(0, -50%, 0)
      rotateY(180deg);
  }

  &:focus,
  &:hover {
    outline: none;

    &::after {
      transform: translate3d(25%, -50%, 0);
    }

    &::before {
      transform:
        translate3d(-125%, -50%, 0)
        rotateY(180deg);
    }
  }
`;

export default Button;
