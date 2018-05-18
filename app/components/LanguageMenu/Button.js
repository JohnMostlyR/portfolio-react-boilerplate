/**
 * Button Component
 * @param label
 * @param isExpanded
 * @param toggleMenuHandler
 * @param buttonRef
 * @returns {*}
 * @constructor
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SVGIcon from '../SVGIcon';

const StyledButton = styled.button`
  &:hover {
    cursor: pointer;
  }

  @supports (display: flex) {
    align-items: center;
    display: flex;
  }
`;

const Label = styled.p`
  display: inherit;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);

  @media (min-width: 768px) {
    display: inline-block;
    height: auto;
    margin: 0 0 0 0.5em;
    overflow: visible;
    position: relative;
    width: auto;
    clip: initial;
    font-size: 1rem;
  }
`;

function Button({ label, isExpanded, toggleMenuHandler, buttonRef }) {
  function handleKeyDown(evt) {
    const { keyCode } = evt;

    switch (keyCode) {
      case 13:  // Enter
      case 32:  // Space
      case 40:  // Arrow Down
        evt.preventDefault();
        toggleMenuHandler();
        break;
      default:
        break;
    }
  }

  return (
    <StyledButton
      onClick={toggleMenuHandler}
      onKeyDown={handleKeyDown}
      aria-expanded={isExpanded}
      aria-haspopup="true"
      innerRef={buttonRef}
    >
      <SVGIcon viewBox="0 0 15.304 15.304">
        <g>
          <path d="M5.734 8.248v-.631a5.587 5.587 0 0 1-.992-.863 12.413 12.413 0 0 1-1.836 1.464l-.081.05-.49-.783.08-.051c.01-.007.876-.556 1.751-1.413a8.345 8.345 0 0 1-1.124-2.402l-.023-.09.895-.23.022.091c.002.01.257.954.877 1.926.613-.745.97-1.463 1.061-2.14H2.115V2.171h2.072v-.559h.966v.558h2.072v1.006h-.417c-.097.941-.575 1.916-1.424 2.901.114.128.231.245.35.357v-.473c0-.336.272-.608.608-.608h2.705V.569a.151.151 0 0 0-.152-.152H.152A.152.152 0 0 0 0 .569v8.742c0 .085.068.152.152.152h5.582V8.248zm4.994.267h-.017c-.084.333-.166.755-.258 1.078l-.332 1.187h1.236l-.347-1.187c-.1-.332-.2-.746-.282-1.078z" />
          <path d="M15.152 5.841H6.41a.152.152 0 0 0-.152.152v8.743c0 .084.068.151.152.151h8.742a.15.15 0 0 0 .152-.151V5.993a.152.152 0 0 0-.152-.152zm-3.18 7.319l-.431-1.436H9.94l-.399 1.436h-1.31L9.94 7.57h1.658l1.733 5.59h-1.359zM3.935 9.846H2.72v2.02l1.006.996h2.26v-1.215H3.935z" />
        </g>
      </SVGIcon>
      <Label>{label}</Label>
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  isExpanded: PropTypes.bool,
  toggleMenuHandler: PropTypes.func,
  buttonRef: PropTypes.func,
};

Button.defaultProps = {
  label: 'Label',
  isExpanded: false,
  toggleMenuHandler: () => (
    console.log('Implement a toggleMenuHandler function')
  ),
  buttonRef: (el) => (
    console.debug(el)
  ),
};

export default Button;
