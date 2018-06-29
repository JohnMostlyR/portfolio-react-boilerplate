import { fromJS } from 'immutable';
import siteNavigationReducer from '../reducer';
import {
  setSiteNavigationIsAtScreenTop,
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
} from '../actions';

describe('siteNavigationReducer Reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      isAtScreenTop: false,
      offsetHeight: 0,
      topPosition: 0,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(siteNavigationReducer(undefined, {})).toEqual(
      fromJS(expectedResult),
    );
  });

  it('should handle the setSiteNavigationTopPosition action correctly', () => {
    const fixture = 10;
    const expectedResult = state.set('topPosition', fixture);

    expect(
      siteNavigationReducer(state, setSiteNavigationTopPosition(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the setSiteNavigationOffsetHeight action correctly', () => {
    const fixture = 100;
    const expectedResult = state.set('offsetHeight', fixture);

    expect(
      siteNavigationReducer(state, setSiteNavigationOffsetHeight(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the setSiteNavigationIsAtScreenTop action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('isAtScreenTop', fixture);

    expect(
      siteNavigationReducer(state, setSiteNavigationIsAtScreenTop(fixture)),
    ).toEqual(expectedResult);
  });
});
