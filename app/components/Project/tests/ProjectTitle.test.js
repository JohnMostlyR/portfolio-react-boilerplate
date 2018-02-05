import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectTitle from '../ProjectTitle';

describe('<ProjectTitle />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectTitle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
