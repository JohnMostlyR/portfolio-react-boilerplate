import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Icon from '../Icon';

describe('<Icon />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Icon />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "viewBox" property', () => {
    const VALUE = '0 0 0 0';
    const renderedComponent = shallow(<Icon viewBox={VALUE} />);
    expect(renderedComponent.prop('viewBox')).toBe(VALUE);
  });
});
