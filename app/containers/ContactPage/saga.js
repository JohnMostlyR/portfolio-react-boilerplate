import { call, put, takeLatest } from 'redux-saga/effects';
import { SEND_FORM } from './constants';
import { sendFormSuccess, sendFormError } from './actions';
import request from '../../utils/request';

// Individual exports for testing

/**
 * Create an URI-encoded parameter string from key/value pairs
 * @param {object} data
 * @returns {string}
 */
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

/**
 * ContactForm request/response handler
 */
export function* sendForm({ field }) {
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, '/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': 'contact', ...field }),
    });
    if (result.success) {
      yield put(sendFormSuccess());
    } else {
      yield put(sendFormError(result.error));
    }
  } catch (error) {
    yield put(sendFormError({ network: error.message }));
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
