import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import FlexColumn from '../index';

describe('<FlexColumn>', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<FlexColumn />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should accept the fullHeight prop', () => {
    const wrapper = shallow(<FlexColumn fullHeight />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should accept the fluid prop', () => {
    const wrapper = shallow(<FlexColumn fluid />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
