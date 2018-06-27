import React from 'react';
import { shallow, mount } from 'enzyme';

import PageHeader from '../index';

describe('<PageHeader />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<PageHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "isLeftHanded" prop', () => {
    const isLeftHanded = false;
    const wrapper = mount(<PageHeader isLeftHanded={isLeftHanded} />);
    expect(wrapper.prop('isLeftHanded')).toBe(isLeftHanded);
  });

  it('should adopt any children', () => {
    const wrapper = shallow(
      <PageHeader>
        <div>children</div>
      </PageHeader>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
