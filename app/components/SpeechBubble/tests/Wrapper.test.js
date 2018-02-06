import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<Wrapper />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
