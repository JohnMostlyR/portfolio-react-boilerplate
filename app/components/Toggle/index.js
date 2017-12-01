/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import enFlag from './en.png';
import nlFlag from './nl.png';
import Wrapper from './Wrapper';

import ToggleOption from '../ToggleOption';

const imagesLookup = {
  en: enFlag,
  nl: nlFlag,
};

function Toggle({ currentValue, messages, onToggle, values }) {
  let content = (<div />);

  // If we have items, render them
  if (values) {
    content = values.map((value) => (
      <ToggleOption
        key={value}
        value={value}
        isChecked={value === currentValue}
        message={messages[value]}
        onChange={onToggle}
        iconImg={imagesLookup[value]}
      />
    ));
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
