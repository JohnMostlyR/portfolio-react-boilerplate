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

  it('should adopt the "maxWidth" prop', () => {
    const renderedComponent = shallow(<Container maxWidth="100px" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showArrowBreakpoint" prop', () => {
    const renderedComponent = shallow(<Container showArrowBreakpoint="1rem" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
