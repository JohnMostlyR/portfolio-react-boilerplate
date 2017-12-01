import React from 'react';
import { shallow } from 'enzyme';

import ProjectDetailsBody from '../ProjectDetailsBody';

describe('<ProjectDetailsBody />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectDetailsBody />);
    expect(wrapper).toMatchSnapshot();
  });
});
