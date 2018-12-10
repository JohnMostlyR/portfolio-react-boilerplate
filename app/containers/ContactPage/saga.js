import { call, put, takeLatest } from 'redux-saga/effects';
import { SEND_FORM } from './constants';
import { sendFormSuccess, sendFormError } from './actions';

// Individual exports for testing

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
function request(url, options) {
  return fetch(url, options).then(checkStatus);
}

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
    yield call(request, '/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': 'contact', ...field }),
    });

    yield put(sendFormSuccess());
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
