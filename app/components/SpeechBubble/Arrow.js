import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

/* eslint-disable indent */
const SVG = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 848 640',
  preserveAspectRatio: 'xMinYMid meet',
  focusable: 'false',
})`
  display: inline-block;
  align-self: ${({ arrowPosition }) =>
    arrowPosition.endsWith('-left') ? 'flex-start' : 'flex-end'};
  height: 1px;
  margin: -1px 0 0 0 !important;
  transform: rotateX(
      ${({ arrowPosition }) =>
        arrowPosition.startsWith('bottom-') ? '0deg' : '180deg'}
    )
    rotateY(
      ${({ arrowPosition }) =>
        arrowPosition.endsWith('-left') ? '0deg' : '180deg'}
    );
  z-index: 9;

  &::after {
    content: '' !important;
    display: block !important;
    clear: both !important;
  }

  @media (min-height: ${({ showBreakpoint, height }) =>
      showBreakpoint || height}) {
    height: ${({ height }) => height || '100%'};
  }
`;

function Arrow({
  arrowPosition,
  backgroundColor,
  height,
  isGhost,
  showBreakpoint,
}) {
  const lighterBackgroundColor =
    (backgroundColor && lighten(0.1, backgroundColor)) || 'inherit';

  return (
    <SVG
      arrowPosition={arrowPosition}
      height={height}
      showBreakpoint={showBreakpoint}
    >
      <path
        stroke={isGhost ? backgroundColor : 'none'}
        strokeWidth="24"
        fill={isGhost ? 'transparent' : lighterBackgroundColor}
        d="M424.2 424.4L526.9 640V398.7"
      />
      <path
        stroke={isGhost ? backgroundColor : 'none'}
        strokeWidth="24"
        fill={isGhost ? 'transparent' : backgroundColor}
        d="M848 318.3L424.2 424.4V158.9"
      />
      <path
        stroke={isGhost ? backgroundColor : 'none'}
        strokeWidth="24"
        fill={isGhost ? 'transparent' : lighterBackgroundColor}
        d="M0 0l848 318.3L636.4 0H0z"
      />
    </SVG>
  );
}

Arrow.propTypes = {
  arrowPosition: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ]),
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  isGhost: PropTypes.bool,
  showBreakpoint: PropTypes.string,
};

export default Arrow;
