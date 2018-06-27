/*
 * Form Messages
 *
 * This contains all the text for the Form component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  range: {
    id: 'portfolio.components.Form.helperText.range',
    defaultMessage:
      'Should be between {minLength, number} and {maxLength, number} characters. Is now: {count, number}',
  },
  valid: {
    id: 'portfolio.components.Form.helperText.valid',
    defaultMessage: 'Thanks!',
  },
});
