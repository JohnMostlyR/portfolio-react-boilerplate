import { fromJS } from 'immutable';
import {
  selectSkillsPageDomain,
  makeSelectLocale,
  makeSelectSkillsText,
  makeSelectError,
  makeSelectLoading,
} from '../selectors';

describe('selectSkillsPageDomain', () => {
  it('should select the skillsPage state domain', () => {
    const skillsPageState = fromJS({});
    const mockedState = fromJS({
      skillsPage: skillsPageState,
    });
    expect(selectSkillsPageDomain(mockedState)).toEqual(skillsPageState);
  });
});

describe('makeSelectAboutMeText', () => {
  const skillsTextSelector = makeSelectSkillsText();
  it('should select the current user', () => {
    const content = 'Some Text';
    const mockedState = fromJS({
      skillsPage: {
        skillsText: content,
      },
    });
    expect(skillsTextSelector(mockedState)).toEqual(content);
  });
});

describe('makeSelectLocale', () => {
  const localeSelector = makeSelectLocale();
  it('should select the loading', () => {
    const locale = 'en';
    const mockedState = fromJS({
      skillsPage: {
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
      skillsPage: {
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
      skillsPage: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
