import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HeaderMenu from '../index';

describe('<HeaderMenu>', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<HeaderMenu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
