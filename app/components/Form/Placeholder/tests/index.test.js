import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Placeholder from '../index';

describe('<Placeholder />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Placeholder />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "hasFocus" prop', () => {
    const hasFocus = false;
    const renderedComponent = mount(<Placeholder hasFocus={hasFocus} />);
    expect(renderedComponent.prop('hasFocus')).toBe(hasFocus);
  });
});
