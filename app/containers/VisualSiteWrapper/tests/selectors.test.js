import { fromJS } from 'immutable';

import {
  makeSelectVisualSiteWrapperScrollTop,
  makeSelectVisualSiteWrapperSiteWidth,
  selectVisualSiteWrapper,
} from '../selectors';

describe('selectVisualSiteWrapper', () => {
  it('should select the visualSiteWrapper state', () => {
    const visualSiteWrapperState = fromJS({});
    const mockedState = fromJS({
      visualSiteWrapper: visualSiteWrapperState,
    });

    expect(selectVisualSiteWrapper(mockedState)).toEqual(
      visualSiteWrapperState,
    );
  });
});

describe('makeSelectVisualSiteWrapperScrollTop', () => {
  const scrollTopStateSelector = makeSelectVisualSiteWrapperScrollTop();
  it('should select the topPosition', () => {
    const scrollTop = 11;
    const mockedState = fromJS({
      visualSiteWrapper: {
        scrollTop,
      },
    });
    expect(scrollTopStateSelector(mockedState)).toEqual(scrollTop);
  });
});

describe('makeSelectVisualSiteWrapperSiteWidth', () => {
  const siteWidthStateSelector = makeSelectVisualSiteWrapperSiteWidth();
  it('should select the siteWidth', () => {
    const siteWidth = 1100;
    const mockedState = fromJS({
      visualSiteWrapper: {
        siteWidth,
      },
    });
    expect(siteWidthStateSelector(mockedState)).toEqual(siteWidth);
  });
});
