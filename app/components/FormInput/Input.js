import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';
import { svgToURL } from '../../styles/tools';

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px dotted;
  font-size: 1rem;
  outline: none;
  padding: .5rem 1.5rem .5rem 0;
  background-color: orange;
  color: inherit;

  ${mq.m`
    background-image: url(${svgToURL(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMaxYMid"><path fill="#A36200" d="M19 30h-5a3.004 3.004 0 0 1-2.614-4.472 3 3 0 0 1-.62-4.528 2.987 2.987 0 0 1-.595-3H3c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501A3.004 3.004 0 0 1 15.001 2c.824 0 1.592.327 2.163.921l.022.023 6.815 7.474V8.999a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1.382l-4.553 2.276a1.006 1.006 0 0 1-.447.106zm8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8.236 0L24 25.382V13.387l-8.287-9.088a1.002 1.002 0 0 0-1.591 1.18c.01.017.02.033.029.051l3.732 7a1 1 0 0 1-.882 1.47h-14c-.551 0-1 .449-1 1s.449 1 1 1h10a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h4.764z"/></svg>')});
    background-position: calc(100% + 1.5em) 50%;
    background-repeat: no-repeat;
    background-size: 1.5em;
    transition: background-position .3s;

    &:focus {
      background-position: center right;
      border-bottom-style: solid;
    }
  `}
`;

export default Input;
