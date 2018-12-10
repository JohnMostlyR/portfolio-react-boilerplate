/**
 * Test  sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { SEND_FORM } from '../constants';
import { sendFormSuccess, sendFormError } from '../actions';

import sendFormData, { sendForm } from '../saga';

const formData = {
  field: {
    title: 'Test',
  },
};

const successResponse = { success: true };

const errorResponse = {
  error: [
    {
      subject: 'This field is required',
    },
  ],
};

/* eslint-disable redux-saga/yield-effects */
describe('sendForm Saga', () => {
  let sendContentGenerator;

  beforeEach(() => {
    sendContentGenerator = sendForm(formData);

    const sendDescriptor = sendContentGenerator.next().value;
    expect(sendDescriptor).toMatchSnapshot();
  });

  it('should dispatch the sendFormSuccess action if it sent the data successfully', () => {
    const putDescriptor = sendContentGenerator.next(successResponse).value;
    expect(putDescriptor).toEqual(put(sendFormSuccess(successResponse)));
  });

  it.skip('should dispatch the sendFormError action if server side validation failed', () => {
    const putDescriptor = sendContentGenerator.next(errorResponse).value;
    expect(putDescriptor).toEqual(put(sendFormError(errorResponse.error)));
  });
});

describe('sendFormData Saga', () => {
  const sendFormDataSaga = sendFormData();

  it('should start task to watch for SEND_FORM action', () => {
    const takeLatestDescriptor = sendFormDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SEND_FORM, sendForm));
  });
});
