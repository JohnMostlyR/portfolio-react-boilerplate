import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectExternalLink from '../ProjectExternalLink';

describe('<ProjectExternalLink />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = toJson(shallow(<ProjectExternalLink />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the faIcon property', () => {
    const wrapper = toJson(shallow(<ProjectExternalLink faIcon="meh-o" />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the name property', () => {
    const wrapper = toJson(shallow(<ProjectExternalLink name="Testing" />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the url property', () => {
    const wrapper = toJson(shallow(<ProjectExternalLink url="http://link.to" />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the hasFocus property', () => {
    const wrapper = toJson(shallow(<ProjectExternalLink hasFocus />));
    expect(wrapper).toMatchSnapshot();
  });
});
