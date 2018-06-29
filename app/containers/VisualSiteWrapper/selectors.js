/**
 * The visualSiteWrapper state selectors
 */

import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectVisualSiteWrapper = state =>
  state.get('visualSiteWrapper', initialState);

const makeSelectVisualSiteWrapperScrollTop = () =>
  createSelector(selectVisualSiteWrapper, substate =>
    substate.get('scrollTop'),
  );

const makeSelectVisualSiteWrapperSiteWidth = () =>
  createSelector(selectVisualSiteWrapper, substate =>
    substate.get('siteWidth'),
  );

export {
  makeSelectVisualSiteWrapperScrollTop,
  makeSelectVisualSiteWrapperSiteWidth,
  selectVisualSiteWrapper,
};
