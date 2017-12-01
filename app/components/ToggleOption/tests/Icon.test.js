import React from 'react';
import { shallow, mount } from 'enzyme';

import Icon from '../Icon';

describe('<Icon />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Icon />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "isChecked" prop', () => {
    const isChecked = false;
    const renderedComponent = mount(<Icon isChecked={isChecked} />);
    expect(renderedComponent.prop('isChecked')).toBe(isChecked);
  });
});
