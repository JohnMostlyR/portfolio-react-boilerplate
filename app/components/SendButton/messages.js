/*
 * SendButton Messages
 *
 * This contains all the text for the SendButton component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  idle: {
    id: 'portfolio.components.SendButton.idle',
    defaultMessage: 'Send',
  },
  sending: {
    id: 'portfolio.components.SendButton.sending',
    defaultMessage: 'Sending...',
  },
  success: {
    id: 'portfolio.components.SendButton.success',
    defaultMessage: 'Sent! I\'ll respond as soon as possible',
  },
  error: {
    id: 'portfolio.components.SendButton.error',
    defaultMessage: 'Failed. Please try again',
  },
});
