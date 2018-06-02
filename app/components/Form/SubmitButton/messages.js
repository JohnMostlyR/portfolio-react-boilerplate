/*
 * SubmitButton Messages
 *
 * This contains all the text for the SubmitButton component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  idle: {
    id: 'portfolio.components.SubmitButton.idle',
    defaultMessage: 'Send',
  },
  sending: {
    id: 'portfolio.components.SubmitButton.sending',
    defaultMessage: 'Sending...',
  },
  success: {
    id: 'portfolio.components.SubmitButton.success',
    defaultMessage: 'Sent! I\'ll respond as soon as possible',
  },
  error: {
    id: 'portfolio.components.SubmitButton.error',
    defaultMessage: 'Failed. Please try again',
  },
});
