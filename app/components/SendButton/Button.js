import styled from 'styled-components';
import { baseFontBold } from '../../styles/templates/typography';
import { svgToURL } from '../../styles/tools';

const Button = styled.button`
  position: relative;
  margin: 0 2rem;
  z-index: 2;
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  ${baseFontBold}

  > span {
    display: inline-block;
    background-color: #A36200;
    border: 1px solid #A36200;
    border-radius: .25rem;
    color: orange;
    cursor: pointer;
    padding: 1rem;
  }

  &[disabled] > span {
    cursor: not-allowed !important;
  }

  &::after,
  &::before {
    position: absolute;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    background-image: url(${svgToURL(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMinYMid"><path fill="#A36200" d="M19 30h-5a3.004 3.004 0 0 1-2.614-4.472 3 3 0 0 1-.62-4.528 2.987 2.987 0 0 1-.595-3H3c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501A3.004 3.004 0 0 1 15.001 2c.824 0 1.592.327 2.163.921l.022.023 6.815 7.474V8.999a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1.382l-4.553 2.276a1.006 1.006 0 0 1-.447.106zm8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8.236 0L24 25.382V13.387l-8.287-9.088a1.002 1.002 0 0 0-1.591 1.18c.01.017.02.033.029.051l3.732 7a1 1 0 0 1-.882 1.47h-14c-.551 0-1 .449-1 1s.449 1 1 1h10a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h4.764z"/></svg>')});
    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-size: 1.5rem;
    color: inherit;
    transition: left .3s, right .3s;
  }

  &::before {
    transform: rotateY(180deg);
  }

  &:focus,
  &:hover {
    outline: none;

    &::after {
      right: -2rem;
    }

    &::before {
      left: -2rem;
    }
  }
`;

export default Button;
