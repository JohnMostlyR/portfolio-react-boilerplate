
import {
  SEND_FORM,
  SEND_FORM_SUCCESS,
  SEND_FORM_ERROR,
} from '../constants';

import {
  sendForm,
  sendFormSuccess,
  sendFormError,
} from '../actions';

describe('ContactPage actions', () => {
  describe('sendForm', () => {
    it('has a type of SEND_FORM', () => {
      const expected = {
        type: SEND_FORM,
        status: 'SENDING',
      };
      expect(sendForm()).toEqual(expected);
    });
  });

  describe('sendFormSuccess', () => {
    it('has a type of SEND_FORM_SUCCESS', () => {
      const expected = {
        type: SEND_FORM_SUCCESS,
        status: 'SUCCESS',
      };
      expect(sendFormSuccess()).toEqual(expected);
    });
  });

  describe('sendFormError', () => {
    it('has a type of SEND_FORM_ERROR', () => {
      const error = 'Me Error';
      const expected = {
        type: SEND_FORM_ERROR,
        status: 'ERROR',
        error,
      };
      expect(sendFormError(error)).toEqual(expected);
    });
  });
});
