
import { fromJS } from 'immutable';
import appReducer from '../reducer';
import {
  setSiteNavigationIsAtScreenTop,
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
  setSiteWidth,
} from '../actions';

describe('App Reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      siteWidth: 0,
      siteNavigation: {
        isAtScreenTop: false,
        offsetHeight: 0,
        topPosition: 0,
      },
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(fromJS(expectedResult));
  });

  it('should handle the setSiteNavigationTopPosition action correctly', () => {
    const fixture = 10;
    const expectedResult = state.setIn(['siteNavigation', 'topPosition'], fixture);

    expect(appReducer(state, setSiteNavigationTopPosition(fixture))).toEqual(expectedResult);
  });

  it('should handle the setSiteNavigationOffsetHeight action correctly', () => {
    const fixture = 100;
    const expectedResult = state.setIn(['siteNavigation', 'offsetHeight'], fixture);

    expect(appReducer(state, setSiteNavigationOffsetHeight(fixture))).toEqual(expectedResult);
  });

  it('should handle the setSiteNavigationIsAtScreenTop action correctly', () => {
    const fixture = true;
    const expectedResult = state.setIn(['siteNavigation', 'isAtScreenTop'], fixture);

    expect(appReducer(state, setSiteNavigationIsAtScreenTop(fixture))).toEqual(expectedResult);
  });

  it('should handle the setSiteWidth action correctly', () => {
    const fixture = 1000;
    const expectedResult = state.set('siteWidth', fixture);

    expect(appReducer(state, setSiteWidth(fixture))).toEqual(expectedResult);
  });
});
