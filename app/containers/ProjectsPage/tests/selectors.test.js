import { fromJS } from 'immutable';
import {
  selectProjectsPageDomain,
  makeSelectProjectsPageProjects,
  makeSelectError,
  makeSelectLoading,
  makeSelectLocale,
} from '../selectors';

describe('selectProjectsPageDomain', () => {
  it('should select the projectsPage state domain', () => {
    const projectsPageState = fromJS({});
    const mockedState = fromJS({
      projectsPage: projectsPageState,
    });
    expect(selectProjectsPageDomain(mockedState)).toEqual(projectsPageState);
  });
});

describe('makeSelectProjectsPageProjects', () => {
  const projectsSelector = makeSelectProjectsPageProjects();
  it('should select the current projects', () => {
    const projects = [{
      title: 'Test',
    }];
    const mockedState = fromJS({
      projectsPage: {
        projects,
      },
    });
    expect(projectsSelector(mockedState)).toEqual(projects);
  });
});

describe('makeSelectLocale', () => {
  const localeSelector = makeSelectLocale();
  it('should select the loading', () => {
    const locale = 'en';
    const mockedState = fromJS({
      projectsPage: {
        locale,
      },
    });
    expect(localeSelector(mockedState)).toEqual(locale);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      projectsPage: {
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
      projectsPage: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
