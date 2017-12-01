import React from 'react';
import { shallow, mount } from 'enzyme';

import Figure from '../Figure';

describe('<Figure />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Figure />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "idOdd" prop', () => {
    const isOdd = false;
    const wrapper = mount(<Figure isOdd={isOdd} />);
    expect(wrapper.prop('isOdd')).toBe(isOdd);
  });
});
