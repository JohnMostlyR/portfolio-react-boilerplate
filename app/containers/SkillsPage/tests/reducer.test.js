import { fromJS } from 'immutable';

import skillsPageReducer from '../reducer';
import {
  loadContent,
  contentLoaded,
  contentLoadingError,
} from '../actions';

describe('skillsPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      skillsText: '',
      locale: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(skillsPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadContent action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('skillsText', '')
      .set('locale', '');

    expect(skillsPageReducer(state, loadContent())).toEqual(expectedResult);
  });

  it('should handle the contentLoaded action correctly', () => {
    const fixture = 'Test';
    const locale = 'en';
    const expectedResult = state
      .set('skillsText', fixture)
      .set('loading', false)
      .set('locale', locale);

    expect(skillsPageReducer(state, contentLoaded(fixture, locale))).toEqual(expectedResult);
  });

  it('should handle the contentLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(skillsPageReducer(state, contentLoadingError(fixture))).toEqual(expectedResult);
  });
});
