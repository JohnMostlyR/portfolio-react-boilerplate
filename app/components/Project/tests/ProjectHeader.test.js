import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectHeader from '../ProjectHeader';

describe('<ProjectHeader />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
