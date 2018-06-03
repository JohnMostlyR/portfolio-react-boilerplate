import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';

import SocialLinks from '../index';

import ThemeContext, { theme } from '../../../styles/theme';

describe('<SocialLinks />', () => {
  it('should render and match the snapshot', () => {
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
