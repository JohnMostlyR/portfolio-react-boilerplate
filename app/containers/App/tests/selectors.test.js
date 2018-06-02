import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectSiteNavigationTopPosition,
  makeSelectSiteNavigationOffsetHeight,
  makeSelectSiteNavigationIsAtScreenTop,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectSiteNavigationIsAtScreenTop', () => {
  const isAtScreenTopStateSelector = makeSelectSiteNavigationIsAtScreenTop();
  it('should select the isAtScreenTop', () => {
    const isAtScreenTop = true;
    const mockedState = fromJS({
      global: {
        siteNavigation: {
          isAtScreenTop,
        },
      },
    });
    expect(isAtScreenTopStateSelector(mockedState)).toEqual(isAtScreenTop);
  });
});

describe('makeSelectSiteNavigationOffsetHeight', () => {
  const offsetHeightStateSelector = makeSelectSiteNavigationOffsetHeight();
  it('should select the offsetHeight', () => {
    const offsetHeight = 10;
    const mockedState = fromJS({
      global: {
        siteNavigation: {
          offsetHeight,
        },
      },
    });
    expect(offsetHeightStateSelector(mockedState)).toEqual(offsetHeight);
  });
});

describe('makeSelectSiteNavigationTopPosition', () => {
  const topPositionStateSelector = makeSelectSiteNavigationTopPosition();
  it('should select the offsetHeight', () => {
    const topPosition = 11;
    const mockedState = fromJS({
      global: {
        siteNavigation: {
          topPosition,
        },
      },
    });
    expect(topPositionStateSelector(mockedState)).toEqual(topPosition);
  });
});
