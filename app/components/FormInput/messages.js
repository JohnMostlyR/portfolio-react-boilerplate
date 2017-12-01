/*
 * FormInput Messages
 *
 * This contains all the text for the FormInput component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  range: {
    id: 'portfolio.components.FormInput.helperText.range',
    defaultMessage: 'Should be between {minLength, number} and {maxLength, number} characters. Is now: {count, number}',
  },
  valid: {
    id: 'portfolio.components.FormInput.helperText.valid',
    defaultMessage: 'Thanks!',
  },
});
