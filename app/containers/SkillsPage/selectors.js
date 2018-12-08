import { createSelector } from 'reselect';
import Parser from 'html-react-parser';

import { initialState } from './reducer';

/**
 * Direct selector to the skillsPage state domain
 */
const selectSkillsPageDomain = state => state.get('skillsPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectSkillsText = () =>
  createSelector(
    selectSkillsPageDomain,
    substate => Parser(substate.get('skillsText')),
  );

const makeSelectLoading = () =>
  createSelector(
    selectSkillsPageDomain,
    substate => substate.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectSkillsPageDomain,
    substate => substate.get('error'),
  );

const makeSelectLocale = () =>
  createSelector(
    selectSkillsPageDomain,
    substate => substate.get('locale'),
  );

export {
  selectSkillsPageDomain,
  makeSelectSkillsText,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocale,
};
