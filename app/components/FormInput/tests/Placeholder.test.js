import React from 'react';
import { shallow, mount } from 'enzyme';

import Placeholder from '../Placeholder';

describe('<Placeholder />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Placeholder />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "hasFocus" prop', () => {
    const hasFocus = false;
    const renderedComponent = mount(<Placeholder hasFocus={hasFocus} />);
    expect(renderedComponent.prop('hasFocus')).toBe(hasFocus);
  });
});
