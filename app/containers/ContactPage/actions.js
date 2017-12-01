/*
 *
 * ContactPage actions
 *
 */

import {
  SEND_FORM,
  SEND_FORM_SUCCESS,
  SEND_FORM_ERROR,
} from './constants';

export function sendForm(field) {
  return {
    type: SEND_FORM,
    status: 'SENDING',
    field,
  };
}

export function sendFormSuccess() {
  return {
    type: SEND_FORM_SUCCESS,
    status: 'SUCCESS',
  };
}

export function sendFormError(error) {
  return {
    type: SEND_FORM_ERROR,
    status: 'ERROR',
    error,
  };
}
