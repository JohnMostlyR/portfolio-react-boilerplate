import { fromJS } from 'immutable';
import {
  selectContactPageDomain,
  makeSelectSendStatus,
  makeSelectField,
  makeSelectError,
} from '../selectors';

describe('selectContactPageDomain', () => {
  it('should select the contactPage state domain', () => {
    const contactPageState = fromJS({});
    const mockedState = fromJS({
      contactPage: contactPageState,
    });
    expect(selectContactPageDomain(mockedState)).toEqual(contactPageState);
  });
});

describe('makeSelectSendStatus', () => {
  const sendStatusSelector = makeSelectSendStatus();
  it('should select the current sendStatus', () => {
    const sendStatusState = 'sending';
    const mockedState = fromJS({
      contactPage: {
        sendStatus: sendStatusState,
      },
    });
    expect(sendStatusSelector(mockedState)).toEqual(sendStatusState);
  });
});

describe('makeSelectField', () => {
  const fieldSelector = makeSelectField();
  it('should select the current field', () => {
    const fieldState = {
      subject: 'Test',
      message: 'Testing',
    };
    const mockedState = fromJS({
      contactPage: {
        field: fieldState,
      },
    });
    expect(fieldSelector(mockedState)).toEqual(fieldState);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the current error', () => {
    const error = {
      subject: 'This field is required',
    };
    const mockedState = fromJS({
      contactPage: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
