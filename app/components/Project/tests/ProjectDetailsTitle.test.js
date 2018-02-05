import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectDetailsTitle from '../ProjectDetailsTitle';

describe('<ProjectDetailsTitle />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectDetailsTitle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
