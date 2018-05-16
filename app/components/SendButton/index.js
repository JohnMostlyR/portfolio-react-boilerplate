/**
*
* SendButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from './Button';
import Label from './Label';
import messages from './messages';

import SVGIcon from '../../components/SVGIcon';

function setMessage(buttonState) {
  switch (buttonState) {
    case 'sending':
      return <FormattedMessage {...messages.sending} />;
    case 'success':
      return <FormattedMessage {...messages.success} />;
    case 'error':
      return <FormattedMessage {...messages.error} />;
    default:
      return <FormattedMessage {...messages.idle} />;
  }
}

function SendButton({ disabled, buttonState }) {
  return (
    <Button disabled={disabled}>
      <span>
        <SVGIcon viewBox="0 0 512 512">
          <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
        </SVGIcon>
        <Label>{setMessage(buttonState)}</Label></span>
    </Button>
  );
}

SendButton.propTypes = {
  disabled: PropTypes.bool,
  buttonState: PropTypes.oneOf(['idle', 'sending', 'success', 'error']),
};

SendButton.defaultProps = {
  disabled: true,
  buttonState: 'idle',
};

export default SendButton;
