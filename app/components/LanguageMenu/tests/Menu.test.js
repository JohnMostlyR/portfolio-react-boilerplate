import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Menu from '../Menu';

describe('<Menu />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Menu />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isExpanded" property', () => {
    const PROPERTY_VALUE = true;
    const renderedComponent = shallow(<Menu isExpanded={PROPERTY_VALUE} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
