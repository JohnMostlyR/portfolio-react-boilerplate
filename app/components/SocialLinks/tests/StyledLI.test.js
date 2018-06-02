import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledLI from '../StyledUL';

describe('<StyledLI>', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<StyledLI />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
