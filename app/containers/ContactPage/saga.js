import { call, put, takeLatest } from 'redux-saga/effects';
import { SEND_FORM } from './constants';
import { sendFormSuccess, sendFormError } from './actions';
import request from '../../utils/request';

// Individual exports for testing

/**
 * ContactForm request/response handler
 */
export function* sendForm(action) {
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, 'https://meester-johan.info/contact-request', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.field),
    });
    if (result.success) {
      yield put(sendFormSuccess());
    } else {
      yield put(sendFormError(result.error));
    }
  } catch (error) {
    yield put(sendFormError([{ error }]));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sendFormData() {
  // Watches for LOAD_CONTENT actions and calls getContent when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEND_FORM, sendForm);
}
