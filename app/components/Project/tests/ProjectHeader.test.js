import React from 'react';
import { shallow } from 'enzyme';

import ProjectHeader from '../ProjectHeader';

describe('<ProjectHeader />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
