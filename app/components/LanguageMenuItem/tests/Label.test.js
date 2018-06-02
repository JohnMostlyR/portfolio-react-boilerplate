import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Label from '../Label';

describe('<Label />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Label />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isSelected" property', () => {
    const renderedComponent = shallow(<Label isSelected />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
