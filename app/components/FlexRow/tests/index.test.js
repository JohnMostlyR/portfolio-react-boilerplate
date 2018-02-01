import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import FlexRow from '../index';

describe('<FlexRow>', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<FlexRow />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should accept the fullHeight prop', () => {
    const wrapper = shallow(<FlexRow fullHeight />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
