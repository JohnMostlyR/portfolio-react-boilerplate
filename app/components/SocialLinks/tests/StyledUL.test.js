import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledUL from '../StyledUL';

describe('<StyledUL>', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<StyledUL />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
