import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadContent,
  contentLoaded,
  contentLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      aboutMeText: '',
      locale: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadContent action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('aboutMeText', '')
      .set('locale', '');

    expect(appReducer(state, loadContent())).toEqual(expectedResult);
  });

  it('should handle the contentLoaded action correctly', () => {
    const fixture = 'Test';
    const locale = 'en';
    const expectedResult = state
      .set('aboutMeText', fixture)
      .set('loading', false)
      .set('locale', locale);

    expect(appReducer(state, contentLoaded(fixture, locale))).toEqual(expectedResult);
  });

  it('should handle the contentLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, contentLoadingError(fixture))).toEqual(expectedResult);
  });
});
