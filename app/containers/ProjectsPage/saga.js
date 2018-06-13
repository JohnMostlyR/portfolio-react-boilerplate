/* eslint no-param-reassign: "off" */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CONTENT } from './constants';
import { contentLoaded, contentLoadingError } from './actions';
import { config } from '../../private';
import request from '../../utils/request';

import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';

// Individual exports for testing

export function parseContent({ sys: { type } = {}, includes: { Asset = [] } = {}, items } = {}) {
  if (String(type).toLowerCase() !== 'array') {
    return [];
  }

  let projects = [];

  try {
    const ASSETS = Asset
      .reduce((acc, curr) => {
        const obj = {};
        obj[curr.sys.id] = curr.fields;
        return Object.assign(acc, obj);
      }, {},
      );

    // Latest to oldest
    const ITEMS_SORTED = items
      .reduce((acc, curr) => acc.concat(curr.fields), [])
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        }
        return 0;
      });

    projects = ITEMS_SORTED
      .reduce((acc, curr) => {
        if (curr.thumbnail) {
          curr.thumbnail = ASSETS[curr.thumbnail.sys.id];
        } else {
          curr.thumbnail = {};
        }

        return acc.concat(curr);
      }, [])
      .reduce((acc, curr) => {
        if (curr.images && Array.isArray(curr.images)) {
          const images = [];
          curr.images.forEach((image) => {
            images.push(ASSETS[image.sys.id]);
          });

          curr.images = images;
        } else {
          curr.images = [];
        }

        return acc.concat(curr);
      }, []);
  } catch (err) {
    throw new Error(err);
  }

  /* eslint consistent-return: "off" */
  return projects || [];
}

/**
 * Contentful CMS request/response handler
 */
export function* getContent() {
  const LOCALE = yield select(makeSelectLocale());
  const localeForContentful = (LOCALE === 'en') ? 'en-US' : LOCALE;
  const ENDPOINT = config.contentful.endpoint;
  const queryParam = {
    access_token: config.contentful.access_token,
    content_type: 'projects',
    select: 'fields',
    locale: localeForContentful,
  };

  const query = Object.keys(queryParam)
    .reduce((accumulator, currentValue) => accumulator.concat(
      `${currentValue}=${queryParam[currentValue]}`), [])
    .join('&');

  const requestURL = `${ENDPOINT}${query}`;

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request, requestURL);
    const parsedContent = parseContent(content);

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
