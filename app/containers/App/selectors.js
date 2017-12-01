/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectGlobalSiteNavigation = (state) => state.getIn(['global', 'siteNavigation']);

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectSiteNavigationTopPosition = () => createSelector(
  selectGlobalSiteNavigation,
  (siteNavigationState) => siteNavigationState.get('topPosition')
);

const makeSelectSiteNavigationOffsetHeight = () => createSelector(
  selectGlobalSiteNavigation,
  (siteNavigationState) => siteNavigationState.get('offsetHeight')
);

const makeSelectSiteNavigationIsAtScreenTop = () => createSelector(
  selectGlobalSiteNavigation,
  (siteNavigationState) => siteNavigationState.get('isAtScreenTop')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectSiteNavigationIsAtScreenTop,
  makeSelectSiteNavigationOffsetHeight,
  makeSelectSiteNavigationTopPosition,
};
