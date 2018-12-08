import { createSelector } from 'reselect';
import Parser from 'html-react-parser';

import { initialState } from './reducer';

/**
 * Direct selector to the aboutPage state domain
 */
const selectAboutPageDomain = state => state.get('aboutPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectAboutMeText = () =>
  createSelector(
    selectAboutPageDomain,
    substate => Parser(substate.get('aboutMeText')),
  );

const makeSelectLoading = () =>
  createSelector(
    selectAboutPageDomain,
    substate => substate.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectAboutPageDomain,
    substate => substate.get('error'),
  );

const makeSelectLocale = () =>
  createSelector(
    selectAboutPageDomain,
    substate => substate.get('locale'),
  );

export {
  selectAboutPageDomain,
  makeSelectAboutMeText,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocale,
};
