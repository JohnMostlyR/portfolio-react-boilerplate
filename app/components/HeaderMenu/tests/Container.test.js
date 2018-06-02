import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Container from '../Container';

describe('<Container />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Container />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" property', () => {
    const color = '#bada55';
    const renderedComponent = shallow(<Container backgroundColor={color} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "color" property', () => {
    const color = '#bada55';
    const renderedComponent = shallow(<Container color={color} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
