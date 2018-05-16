import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import H2 from '../index';

describe('<H2 />', () => {
  it('Should render and match the snapshot', () => {
    const renderedComponent = shallow(<H2 />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('Should adopt the "color" property', () => {
    const color = '#bada55';
    const renderedComponent = shallow(<H2 color={color} />);
    expect(renderedComponent.prop('color')).toEqual(color);
  });
});
