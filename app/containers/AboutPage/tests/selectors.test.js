import { fromJS } from 'immutable';
import {
  selectAboutPageDomain,
  makeSelectLocale,
  makeSelectAboutMeText,
  makeSelectError,
  makeSelectLoading,
} from '../selectors';

describe('selectAboutPageDomain', () => {
  it('should select the aboutPage state domain', () => {
    const aboutPageState = fromJS({});
    const mockedState = fromJS({
      aboutPage: aboutPageState,
    });
    expect(selectAboutPageDomain(mockedState)).toEqual(aboutPageState);
  });
});

describe('makeSelectAboutMeText', () => {
  const aboutMeTextSelector = makeSelectAboutMeText();
  it('should select the current aboutMeText', () => {
    const content = 'Some Text';
    const mockedState = fromJS({
      aboutPage: {
        aboutMeText: content,
      },
    });
    expect(aboutMeTextSelector(mockedState)).toEqual(content);
  });
});

describe('makeSelectLocale', () => {
  const localeSelector = makeSelectLocale();
  it('should select the loading', () => {
    const locale = 'en';
    const mockedState = fromJS({
      aboutPage: {
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
      aboutPage: {
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
      aboutPage: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
