import React from 'react';
import { shallow } from 'enzyme';

import MediaWrapper from '../MediaWrapper';

describe('<MediaWrapper />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<MediaWrapper />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "spacing" prop', () => {
    const spacing = '10px';
    const wrapper = shallow(<MediaWrapper spacing={spacing} />);
    expect(wrapper.prop('spacing')).toBe(spacing);
    expect(wrapper).toMatchSnapshot();
  });
});
