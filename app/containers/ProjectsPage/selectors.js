import { createSelector } from 'reselect';
import { List } from 'immutable';

/**
 * Direct selector to the projectsPage state domain
 */
const selectProjectsPageDomain = (state) => state.get('projectsPage');

/**
 * Other specific selectors
 */
const makeSelectProjectsPageProjects = () => createSelector(
  selectProjectsPageDomain,
  (substate) => {
    const projects = substate.get('projects');

    if (List.isList(projects)) {
      return projects.toJS();
    }

    return projects;
  }
);

const makeSelectLoading = () => createSelector(
  selectProjectsPageDomain,
  (substate) => substate.get('loading')
);

const makeSelectError = () => createSelector(
  selectProjectsPageDomain,
  (substate) => substate.get('error')
);

const makeSelectLocale = () => createSelector(
  selectProjectsPageDomain,
  (substate) => substate.get('locale')
);

export {
  selectProjectsPageDomain,
  makeSelectProjectsPageProjects,
  makeSelectLocale,
  makeSelectLoading,
  makeSelectError,
};
