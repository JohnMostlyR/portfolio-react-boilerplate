import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';

import { ContentLoadingIndicator } from '../index';

describe('<ContentLoadingIndicator />', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<ContentLoadingIndicator />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "show" property', () => {
    const wrapper = mount(
      <IntlProvider locale={'en'}>
        <ContentLoadingIndicator show />
      </IntlProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "showError" property', () => {
    const wrapper = mount(
      <IntlProvider locale={'en'}>
        <ContentLoadingIndicator showError />
      </IntlProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
