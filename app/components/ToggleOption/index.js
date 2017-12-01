/**
*
* ToggleOption
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Icon from './Icon';
import Img from './Img';
import Wrapper from './Wrapper';

const ToggleOption = ({ value, message, onChange, isChecked, iconImg }) => (
  <Wrapper>
    <label htmlFor={`js-radio-label-${value}`}>
      <Icon
        isChecked={isChecked}
        aria-hidden
      ><Img
        src={iconImg}
        alt={''}
      /></Icon><span hidden aria-hidden={false}>{
      message
        ? <FormattedMessage {...message} />
        : <span>{value}</span>
    }</span>
    </label>
    <input
      hidden
      id={`js-radio-label-${value}`}
      type={'radio'}
      name={'localeToggle'}
      value={value}
      onChange={onChange}
      checked={isChecked}
    />
  </Wrapper>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  onChange: PropTypes.func,
  iconImg: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default ToggleOption;
