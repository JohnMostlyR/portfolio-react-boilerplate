/**
*
* SendButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import messages from './messages';

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
      <span><ButtonIcon name={'paper-plane'} /><span>{setMessage(buttonState)}</span></span>
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
