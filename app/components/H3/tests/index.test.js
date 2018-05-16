import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import H3 from '../index';

describe('<H3 />', () => {
  it('Should render and match the snapshot', () => {
    const renderedComponent = shallow(<H3 />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('Should adopt the "color" property', () => {
    const color = '#bada55';
    const renderedComponent = shallow(<H3 color={color} />);
    expect(renderedComponent.prop('color')).toEqual(color);
  });
});
