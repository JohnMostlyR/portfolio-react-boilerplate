import { call, put, select, takeLatest } from 'redux-saga/effects';
import marked from 'marked';
import { LOAD_CONTENT } from './constants';
import { contentLoaded, contentLoadingError } from './actions';
import { config } from '../../config';
import request from '../../utils/request';

import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';

marked.options({
  breaks: true,
});

const {
  api: {
    contentful: { endpoint, access_token }, // eslint-disable-line
  },
} = config;

// Individual exports for testing

/**
 * Contentful CMS request/response handler
 */
export function* getContent() {
  const LOCALE = yield select(makeSelectLocale());
  const localeForContentful = LOCALE === 'en' ? 'en-US' : LOCALE;
  const queryParam = {
    access_token,
    content_type: 'skills',
    select: 'fields',
    locale: localeForContentful,
  };

  const query = Object.keys(queryParam)
    .reduce(
      (accumulator, currentValue) =>
        accumulator.concat(`${currentValue}=${queryParam[currentValue]}`),
      [],
    )
    .join('&');

  const requestURL = `${endpoint}${query}`;

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request, requestURL);
    const parsedContent = marked(content.items[0].fields.content);

    yield put(contentLoaded(parsedContent, LOCALE));
  } catch (err) {
    yield put(contentLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* contentfulData() {
  // Watches for LOAD_CONTENT actions and calls getContent when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CONTENT, getContent);
}
