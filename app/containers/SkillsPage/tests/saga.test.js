/**
 * Tests for SkillsPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import marked from 'marked';

import { LOAD_CONTENT } from '../constants';
import { contentLoaded, contentLoadingError } from '../actions';

import contentfulData, { getContent } from '../saga';

const locale = 'en';

/* eslint-disable redux-saga/yield-effects */
describe('getContent Saga', () => {
  let getContentGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getContentGenerator = getContent();

    const selectDescriptor = getContentGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getContentGenerator.next(locale).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the contentLoaded action if it requests the data successfully', () => {
    const response = {
      items: [
        {
          fields: {
            content: 'Some content',
          },
        },
      ],
    };

    const parsedResponse = marked('Some content');

    const putDescriptor = getContentGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(contentLoaded(parsedResponse, locale)));
  });

  it('should call the contentLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getContentGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(contentLoadingError(response)));
  });
});

describe('contentfulData Saga', () => {
  const contentfulDataSaga = contentfulData();

  it('should start task to watch for LOAD_CONTENT action', () => {
    const takeLatestDescriptor = contentfulDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_CONTENT, getContent));
  });
});
