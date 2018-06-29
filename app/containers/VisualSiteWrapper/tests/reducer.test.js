import { fromJS } from 'immutable';
import visualSiteWrapperReducer from '../reducer';
import { setScrollTop, setSiteWidth } from '../actions';

describe('VisualSiteWrapper Reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      scrollTop: 0,
      siteWidth: 0,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(visualSiteWrapperReducer(undefined, {})).toEqual(
      fromJS(expectedResult),
    );
  });

  it('should handle the setScrollTop action correctly', () => {
    const fixture = 10;
    const expectedResult = state.set('scrollTop', fixture);

    expect(visualSiteWrapperReducer(state, setScrollTop(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setSiteWidth action correctly', () => {
    const fixture = 100;
    const expectedResult = state.set('siteWidth', fixture);

    expect(visualSiteWrapperReducer(state, setSiteWidth(fixture))).toEqual(
      expectedResult,
    );
  });
});
