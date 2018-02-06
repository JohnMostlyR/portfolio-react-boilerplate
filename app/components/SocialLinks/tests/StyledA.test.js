import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledA from '../StyledA';

describe('<StyledA>', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<StyledA />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
