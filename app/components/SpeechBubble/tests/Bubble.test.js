import React from 'react';
import { shallow, mount } from 'enzyme';

import Bubble from '../Bubble';

describe('<Bubble />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Bubble />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "isLeftHanded" prop', () => {
    const isLeftHanded = true;
    const wrapper = mount(<Bubble isLeftHanded={isLeftHanded} />);
    expect(wrapper.prop('isLeftHanded')).toBe(isLeftHanded);
  });

  it('should adopt any children', () => {
    const wrapper = shallow(<Bubble><div>{'children'}</div></Bubble>);
    expect(wrapper).toMatchSnapshot();
  });
});
