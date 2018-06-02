import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Logo from '../index';

describe('<Logo />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Logo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should adopt the "fontFamily" property', () => {
    const fontFamily = ['Arial', 'Helvetica'];
    const wrapper = shallow(<Logo fontFamily={fontFamily} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should adopt the "showNameBreakpoint" property', () => {
    const showNameBreakpoint = '768px';
    const wrapper = shallow(<Logo showNameBreakpoint={showNameBreakpoint} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
