import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { mount } from 'enzyme';

import SelectLocale, { mapDispatchToProps } from '../index';
import { changeLanguage } from '../../LanguageProvider/actions';
import LanguageProvider from '../../LanguageProvider';

import configureStore from '../../../configureStore';
import { translationMessages } from '../../../i18n';

describe('<SelectLocale />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render the default language messages', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <SelectLocale />
        </LanguageProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<SelectLocale />)).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    describe('changeLanguageHandler', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.changeLanguageHandler).toBeDefined();
      });

      it('should dispatch changeLanguage when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const locale = 'nl';
        result.changeLanguageHandler(locale);
        expect(dispatch).toHaveBeenCalledWith(changeLanguage(locale));
      });
    });
  });
});
