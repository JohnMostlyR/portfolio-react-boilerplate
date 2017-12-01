import React from 'react';
import { shallow } from 'enzyme';

import ProjectBody from '../ProjectBody';

describe('<ProjectBody />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectBody />);
    expect(wrapper).toMatchSnapshot();
  });
});
