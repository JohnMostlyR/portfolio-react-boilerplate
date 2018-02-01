import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { baseFontStackSansSerif } from '../../styles/templates/typography';

const SiteNavigationLink = styled(Link)`
  display: inline-block;
  position: relative;
  background-color: #f63;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5em;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;
  white-space: nowrap;
  font-family: ${baseFontStackSansSerif};
  font-weight: 400;

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    border: 1px solid #f63;
    border-radius: inherit;
    opacity: 0;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);

    @media (min-width: 600px) {
      border: 2px solid #f63;
      border-radius: 5px;
    }
  }

  &:active,
  &:hover {
    background-color: transparent;
    color: #f63;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @media (min-width: 600px) {
    border-radius: 5px;
    width: 100%; /* For IE and Edge who don't support the max-content prop. */
    width: max-content;
  }

  ${(props) => {
    if (props['data-isactive']) {
      return (`
        background-color: transparent;
        color: #f63;

        &::before {
          opacity: 1;
          transform: scale3d(1, 1, 1);
        }
      `);
    }

    return '';
  }}
`;

export default SiteNavigationLink;
