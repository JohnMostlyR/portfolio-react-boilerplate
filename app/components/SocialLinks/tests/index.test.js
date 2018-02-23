import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';

import SocialLinks from '../index';

describe('<SocialLinks />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = mount(
      <IntlProvider locale={'en'}>
        <SocialLinks />
      </IntlProvider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
