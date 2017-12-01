/*
 *
 * ContactPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_FORM,
  SEND_FORM_ERROR,
  SEND_FORM_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: {},
  sendStatus: 'IDLE',
  field: {
    subject: '',
    message: '',
    name: '',
    email: '',
  },
});

function contactPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_FORM:
      return state
        .set('error', {})
        .set('field', action.field)
        .set('sendStatus', action.status);
    case SEND_FORM_SUCCESS:
      return state
        .set('sendStatus', action.status)
        .set('field', {
          subject: '',
          message: '',
          name: '',
          email: '',
        });
    case SEND_FORM_ERROR:
      return state
        .set('sendStatus', action.status)
        .set('error', action.error);
    default:
      return state;
  }
}

export default contactPageReducer;
