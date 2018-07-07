import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { theme } from '../../styles/theme';
import { MODULAR_SCALE_FACTOR } from '../../styles/typography';
import { svgToURL } from '../../styles/tools';

const { backgroundColor, color } = theme.site.navigation.link;
const activeClassName = 'nav-item-active';
const handPointingLeftSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
    <path fill="${backgroundColor}" d="M19 30h-5a3.004 3.004 0 0 1-2.614-4.472 3 3 0 0 1-.62-4.528 2.987 2.987 0 0 1-.595-3H3c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501A3.004 3.004 0 0 1 15.001 2c.824 0 1.592.327 2.163.921l.022.023 6.815 7.474V8.999a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1.382l-4.553 2.276a1.006 1.006 0 0 1-.447.106zm8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8.236 0L24 25.382V13.387l-8.287-9.088a1.002 1.002 0 0 0-1.591 1.18c.01.017.02.033.029.051l3.732 7a1 1 0 0 1-.882 1.47h-14c-.551 0-1 .449-1 1s.449 1 1 1h10a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h4.764z"/>
  </svg>
`;

const Link = styled(NavLink).attrs({
  activeClassName,
  'data-hasfocus': 'false',
})`
  align-items: center;
  display: flex;
  position: relative;
  background-color: ${backgroundColor};
  border-radius: 0.25rem;
  color: ${color};
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none !important;
  white-space: nowrap;
  z-index: 2;

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    background-image: ${() => `url(${svgToURL(handPointingLeftSVG)})`};
    background-position: 10% center;
    background-repeat: no-repeat;
    background-size: ${MODULAR_SCALE_FACTOR ** 2}rem
      ${MODULAR_SCALE_FACTOR ** 2}rem; /* stylelint-disable-line declaration-colon-space-after */
    color: inherit;
    transform: translateX(0) rotateY(180deg);
    transition: transform 0.3s 0s ease-in-out;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }

  &::after {
    content: '';
    bottom: -0.25rem;
    left: -0.25rem;
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
    border: 1px solid ${backgroundColor};
    border-radius: 0.25rem;
    opacity: 0;
    transition: opacity 0.3s 0s ease-in-out;
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &.${activeClassName}, &:hover {
    @media (min-width: 1350px) {
      box-shadow: 0 0 1px dimgrey;
    }

    &::before {
      transform: translateX(-100%) rotateY(180deg);
    }
  }

  @media (min-width: 1350px) {
    box-shadow: 0 0 5px grey;
  }
`;

export default Link;
