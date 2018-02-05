import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectBody from '../ProjectBody';

describe('<ProjectBody />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectBody />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
