import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectDetailsBody from '../ProjectDetailsBody';

describe('<ProjectDetailsBody />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectDetailsBody />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
