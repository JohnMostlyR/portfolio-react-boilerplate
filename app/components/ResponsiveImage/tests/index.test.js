import React from 'react';
import { mount } from 'enzyme';

import ResponsiveImage from '../index';

const SRC = './test.png';
const ALT = 'Test';

describe('ResponsiveImage', () => {
  it('should render a <div />', () => {
    const wrapper = mount(<ResponsiveImage imageSource={SRC} imageAlt={ALT} />);
    const div = wrapper.find(<div />).first();
    expect(div).toBeDefined();
  });

  it('should render an <img />', () => {
    const wrapper = mount(<ResponsiveImage imageSource={SRC} imageAlt={ALT} />);
    const img = wrapper.find(<img src={SRC} alt={ALT} />).first();
    expect(img).toBeDefined();
  });
});
