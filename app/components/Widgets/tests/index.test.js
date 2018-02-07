import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Widgets from '../index';

describe('<Widgets>', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<Widgets />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
