import { fromJS } from 'immutable';
import contactPageReducer from '../reducer';
import { sendForm, sendFormSuccess } from '../actions';

describe('contactPageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: {},
      sendStatus: 'idle',
      field: {
        subject: '',
        message: '',
        name: '',
        email: '',
      },
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(contactPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the sendForm action correctly', () => {
    const fixture = {
      subject: 'Test',
      message: 'Testing',
      name: 'T. Est',
      email: 'test@mail.com',
    };
    const expectedResult = state
      .set('error', {})
      .set('field', fixture)
      .set('sendStatus', 'sending');

    expect(contactPageReducer(state, sendForm(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the sendFormSuccess action correctly', () => {
    const fixture = {
      subject: '',
      message: '',
      name: '',
      email: '',
    };
    const expectedResult = state
      .set('sendStatus', 'success')
      .set('field', fixture);

    expect(contactPageReducer(state, sendFormSuccess())).toEqual(
      fromJS(expectedResult),
    );
  });
});
