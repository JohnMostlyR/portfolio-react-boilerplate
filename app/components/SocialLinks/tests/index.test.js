import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';

import SocialLinks from '../index';

import ThemeContext, { theme } from '../../../styles/theme';

describe('<SocialLinks />', () => {
  /**
   * TODO; Waiting for Enzyme to resolve issues with testing with the Context API
   * @link https://github.com/airbnb/enzyme/issues/1553
   */
  it.skip('should render and match the snapshot', () => {
    const wrapper = mount(
      <IntlProvider locale={'en'}>
        <ThemeContext.Provider value={theme}>
          <SocialLinks />
        </ThemeContext.Provider>
      </IntlProvider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
