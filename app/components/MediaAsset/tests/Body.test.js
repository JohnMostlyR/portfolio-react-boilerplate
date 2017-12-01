import React from 'react';
import { shallow } from 'enzyme';

import Body from '../Body';

describe('<Body />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });
});
