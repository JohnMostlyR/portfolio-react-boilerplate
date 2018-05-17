/**
 * Logo Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_FONT_STACK = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  'sans-serif',
];

const NameGroup = styled.g`
  display: none;
  fill: currentColor;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 120px;
  letter-spacing: 12px;

  @media (min-width: ${({ showNameBreakpoint }) => showNameBreakpoint}) {
    display: block;
  }
`;

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1242 640"
      aria-hidden="true"
      focusable="false"
      height="100%"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <clipPath id="a">
          <circle cx="289" cy="320" r="279.1" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path fill="#96F" d="M10 40.9h558v278H10v-278z" />
        <path fill="#69F" d="M10 317.9h558v281.2H10V317.9z" />
      </g>
      <circle
        cx="289"
        cy="320"
        r="272.4"
        fill="none"
        stroke="#FFC40D"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
      <path
        fill="#FFF"
        d="M209.1 146c-2.4 1.8-2.9 4.7-2.3 18.5.9 25.7 5.2 28.3 48.5 31.1 15.9.9 33.9 2.1 39.8 2.7l10.9.9-2.4 12.1c-1.8 8.6-2.1 18.6-1.4 36.6.6 13.6.6 24.7.3 24.7s-11.9 2.1-25.4 4.7c-22.7 4.2-27.1 4.6-55.2 3.6-34-1.2-34.6-.9-34.6 10.1 0 15.7 8.9 25.7 27.9 31.9 17.4 5.5 52.6 5 89.5-.9l7.3-1.2 1.4 9.3c1.7 12.4 1.7 41.2.2 53.1l-1.5 9.7-24.5-.9c-31.9-1.1-79.4 3-106.5 9.4-18.8 4.4-25.4 6.2-29.6 8.5-2.7 1.4-5.9 2.4-7.4 2.4-1.4 0-6.5 2.1-11.5 4.7-4.7 2.6-10.9 5.8-13.1 7-2.4 1.4-6.4 5.3-8.9 8.9-3.5 5.3-4.4 8.6-3.9 16 .9 18.6 11.2 33.3 28.9 41.5 8.9 4.2 11.2 4.4 30.4 3.5 18.8-.9 58.2-6.8 67.1-10.3 2-.6 8.3-2.7 14.4-4.4 5.9-1.7 13.4-4.2 16.6-5.5 3.2-1.4 6.8-2.4 8-2.4 3.6 0 42.1-20.3 51-26.9 4.7-3.5 10.3-9.7 12.5-13.8l4.1-7.3 19.2 5c33.9 8.9 50.5 16.9 66.4 31.4 6.7 6.1 11.3 11.9 11.9 15.1.6 2.9 1.8 5.6 2.9 6.2.9.6 1.7 2.4 1.7 4.4 0 1.8 1.7 5.2 3.6 7 4.7 4.7 11.3 3.2 19.2-4.2 19.4-18.5 6.1-45.4-31.9-64.8-25-12.8-35.5-16.5-63.2-21.9l-25-5-1.4-17.1c-.6-9.3-3.2-26.9-5.8-39-2.6-12.1-4.4-22.2-4.1-22.4.3-.2 8.9-2 19.2-4.2 30.4-6.4 50.4-17.4 57-31.1 4.2-8.6 4.4-11.8 1.8-21.2-2.9-10-6.7-10.1-31.6-1.7-25.4 8.5-53.4 13.1-56 9.1-4.7-7.6 1.4-39 11.3-57.6l5.9-11.2 28-.2c30.8-.2 50-3.3 64.2-10.7 20.4-10.4 22.7-27.6 5.5-37.8l-7.3-3c-3-1.4-6.4-1.8-9.8-2l-42.2-.3c-28-.2-76.8-.6-108.6-1.2-44.4-.7-59.2-.4-61.5 1.1zm90.3 276.7c-5.6 3.9-18.1 10.1-34 17.1-3.3 1.5-7.6 3.3-9.1 4.2-1.7.8-6.1 2-9.8 2.7-3.8.6-7.7 1.7-8.6 2.4-.9.6-8.2 2.6-16.2 4.2-7.7 1.7-17.8 3.9-22.1 5-4.2 1.1-18.9 2-32.4 2-19.8 0-25.7-.6-31.1-3.2-4.1-2-6.5-4.2-6.2-5.9.6-3.5 25-16 35.4-18.1 4.4-.9 11.3-2.4 15.1-3.6 17.8-4.7 65.7-9.3 108-10.4l17.1-.5-6.1 4.1z"
      />
      <NameGroup {...props}>
        <text transform="translate(645.882 254.472)">
          JOHAN
        </text>
        <text transform="translate(645.882 470.217)">
          MEESTER
        </text>
      </NameGroup>
    </svg>
  );
}

Logo.propTypes = {
  fontFamily: PropTypes.arrayOf(PropTypes.string),
  showNameBreakpoint: PropTypes.string,
};

Logo.defaultProps = {
  fontFamily: DEFAULT_FONT_STACK,
  showNameBreakpoint: '320px',
};

export default Logo;
