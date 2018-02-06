import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledHeader from '../StyledHeader';

describe('<StyledHeader />', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<StyledHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
