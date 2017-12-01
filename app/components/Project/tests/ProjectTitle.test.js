import React from 'react';
import { shallow } from 'enzyme';

import ProjectTitle from '../ProjectTitle';

describe('<ProjectTitle />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ProjectTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
