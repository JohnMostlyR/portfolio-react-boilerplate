import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../../styles/theme';
import { BASE_FONT_REGULAR, BASE_LINE_HEIGHT } from '../../styles/typography';

const { backgroundColor, color } = theme.site.navigation.link;

const StyledButton = styled.button`
  display: inline-block;
  margin-left: auto;
  background-color: ${backgroundColor};
  border-radius: 0.25rem;
  box-shadow: 0 0 5px lightgrey;
  color: ${color};
  cursor: pointer;
  letter-spacing: normal;
  padding: 0.5rem;
  text-align: left;
  transition: box-shadow 0.3s 0s ease-in-out;
  white-space: nowrap;
  word-break: keep-all;
  line-height: ${BASE_LINE_HEIGHT};
  ${BASE_FONT_REGULAR}

  &:hover {
    box-shadow: 0 0 1px gray;
  }

  @media (min-width: ${({ bigScreenBreakpoint }) => `${bigScreenBreakpoint}px`}) {
    display: none;
  }
`;

const SVGIcon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 100 100',
  focusable: 'false',
})`
  height: 16px;
  position: relative;
  width: 16px;
  fill: currentColor;
`;

const SVGPath = styled.path`
  opacity: 1;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.2s ease-in-out;
`;

const SVGPathOne = styled(SVGPath).attrs({
  d: 'M5 13h141v14H5z',
  transform: ({ isExpanded }) => (
    isExpanded
    ? 'translate(16 -16) rotate(45 0 0)' : 'rotate(0) translate(0)'
  ),
})``; /* stylelint-disable-line block-no-empty */

const SVGPathTwo = styled(SVGPath).attrs({
  d: 'M5 43h90v14H5z',
})`
  opacity: ${({ isExpanded }) => isExpanded ? 0 : 1};
`;

const SVGPathThree = styled(SVGPath).attrs({
  d: 'M5 73h141v14H5z',
  transform: ({ isExpanded }) => (
    isExpanded
      ? 'translate(16, 16) rotate(-45 0 100)' : 'rotate(0) translate(0)'
  ),
})``; /* stylelint-disable-line block-no-empty */

const Label = styled.span`
  margin-left: 0.5em;
  vertical-align: middle;
`;

function Button({ bigScreenBreakpoint, isExpanded, label, toggleMenu, buttonRef }) {
  function handleKeyDown(evt) {
    const { keyCode } = evt;

    switch (keyCode) {
      case 13:  // Enter
      case 32:  // Space
      case 40:  // Arrow Down
        evt.preventDefault();
        toggleMenu();
        break;
      default:
        break;
    }
  }

  return (
    <StyledButton
      aria-expanded={isExpanded}
      bigScreenBreakpoint={bigScreenBreakpoint}
      innerRef={buttonRef}
      onClick={toggleMenu}
      onKeyDown={handleKeyDown}
    >
      <SVGIcon>
        <SVGPathOne isExpanded={isExpanded} />
        <SVGPathTwo isExpanded={isExpanded} />
        <SVGPathThree isExpanded={isExpanded} />
      </SVGIcon>
      <Label>{ label }</Label>
    </StyledButton>
  );
}

Button.propTypes = {
  bigScreenBreakpoint: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool,
  label: PropTypes.string,
  toggleMenu: PropTypes.func,
  buttonRef: PropTypes.func,
};

Button.defaultProps = {
  label: 'Label',
  isExpanded: false,
  toggleMenu: () => { console.log('Default onClick handler'); },
  buttonRef: (el) => (
    console.debug(el)
  ),
};

export default Button;
