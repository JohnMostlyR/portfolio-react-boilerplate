/**
 * The SiteNavigation state selectors
 */

import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectSiteNavigationDomain = state =>
  state.get('siteNavigation', initialState);

const makeSelectSiteNavigationTopPosition = () =>
  createSelector(
    selectSiteNavigationDomain,
    substate => substate.get('topPosition'),
  );

const makeSelectSiteNavigationOffsetHeight = () =>
  createSelector(
    selectSiteNavigationDomain,
    substate => substate.get('offsetHeight'),
  );

const makeSelectSiteNavigationIsAtScreenTop = () =>
  createSelector(
    selectSiteNavigationDomain,
    substate => substate.get('isAtScreenTop'),
  );

export {
  makeSelectSiteNavigationIsAtScreenTop,
  makeSelectSiteNavigationOffsetHeight,
  makeSelectSiteNavigationTopPosition,
  selectSiteNavigationDomain,
};
