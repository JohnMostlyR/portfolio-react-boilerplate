/**
*
* LanguageMenuItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconEN from './IconEN';
import IconNL from './IconNL';
import Label from './Label';

export const AVAILABLE_ICONS = ['en', 'nl'];

const Button = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  display: flex;
  padding: 1rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

function LanguageMenuItem({ value, onClickHandler, isSelected }) {
  function handleClick(lang, ev) {
    ev.preventDefault();
    onClickHandler(lang);
  }

  function handleKeyDown(lang, ev) {
    if (ev.keyCode === 13) { // Enter
      ev.preventDefault();
      onClickHandler(lang);
    }
  }

  const labels = {
    nl: (
      <Button
        role="menuitemradio"
        aria-checked={isSelected}
        disabled={isSelected}
        tabIndex="-1"
        lang="nl"
        data-hasfocus="false"
        onClick={(el) => handleClick('nl', el)}
        onKeyDown={(el) => handleKeyDown('nl', el)}
      >
        <IconNL isSelected={isSelected} /><Label isSelected={isSelected}>Nederlands</Label>
      </Button>
    ),
    en: (
      <Button
        role="menuitemradio"
        aria-checked={isSelected}
        disabled={isSelected}
        tabIndex="-1"
        lang="en"
        data-hasfocus="false"
        onClick={(el) => handleClick('en', el)}
        onKeyDown={(el) => handleKeyDown('en', el)}
      >
        <IconEN isSelected={isSelected} /><Label isSelected={isSelected}>English</Label>
      </Button>
    ),
  };

  return labels[value] || <React.Fragment />;
}

LanguageMenuItem.propTypes = {
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  value: PropTypes.oneOf(AVAILABLE_ICONS).isRequired,
};

LanguageMenuItem.defaultProps = {
  isSelected: false,
};

export default LanguageMenuItem;
