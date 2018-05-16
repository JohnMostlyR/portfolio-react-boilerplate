import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Brand from '../index';

describe('<Brand />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Brand />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
