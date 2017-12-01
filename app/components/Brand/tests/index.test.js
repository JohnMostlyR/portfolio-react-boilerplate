import React from 'react';
import { shallow } from 'enzyme';

import Brand from '../index';

describe('Brand', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Brand />);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
