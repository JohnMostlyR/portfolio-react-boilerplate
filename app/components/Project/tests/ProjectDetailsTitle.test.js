import React from 'react';
import { shallow } from 'enzyme';

import ProjectDetailsTitle from '../ProjectDetailsTitle';

describe('<ProjectDetailsTitle />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectDetailsTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
