import { fromJS } from 'immutable';

import projectsPageReducer from '../reducer';
import {
  loadContent,
  contentLoaded,
  contentLoadingError,
} from '../actions';

describe('projectsPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      projects: [],
      locale: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(projectsPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadContent action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('locale', '');

    expect(projectsPageReducer(state, loadContent())).toEqual(expectedResult);
  });

  it('should handle the contentLoaded action correctly', () => {
    const fixture = ['Test 1', 'Test 2'];
    const locale = 'en';
    const expectedResult = state
      .set('projects', fixture)
      .set('loading', false)
      .set('locale', locale);

    expect(projectsPageReducer(state, contentLoaded(fixture, locale))).toEqual(expectedResult);
  });

  it('should handle the contentLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(projectsPageReducer(state, contentLoadingError(fixture))).toEqual(expectedResult);
  });
});
