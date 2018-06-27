import React from 'react';
import { shallow } from 'enzyme';

import Brand from '../index';

describe('<Brand />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Brand />);
    expect(wrapper).toMatchSnapshot();
  });
});
