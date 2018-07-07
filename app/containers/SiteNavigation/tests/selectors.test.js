import { fromJS } from 'immutable';

import {
  makeSelectSiteNavigationTopPosition,
  makeSelectSiteNavigationOffsetHeight,
  makeSelectSiteNavigationIsAtScreenTop,
  selectSiteNavigationDomain,
} from '../selectors';

describe('selectSiteNavigation', () => {
  it('should select the siteNavigation state', () => {
    const siteNavigationState = fromJS({});
    const mockedState = fromJS({
      siteNavigation: siteNavigationState,
    });

    expect(selectSiteNavigationDomain(mockedState)).toEqual(
      siteNavigationState,
    );
  });
});

describe('makeSelectSiteNavigationIsAtScreenTop', () => {
  const isAtScreenTopStateSelector = makeSelectSiteNavigationIsAtScreenTop();
  it('should select the isAtScreenTop', () => {
    const isAtScreenTop = true;
    const mockedState = fromJS({
      siteNavigation: {
        isAtScreenTop,
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
      siteNavigation: {
        offsetHeight,
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
      siteNavigation: {
        topPosition,
      },
    });

    expect(topPositionStateSelector(mockedState)).toEqual(topPosition);
  });
});
