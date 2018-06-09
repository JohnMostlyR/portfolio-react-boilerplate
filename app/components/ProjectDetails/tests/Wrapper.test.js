import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "animate" property', () => {
    const renderedComponent = shallow(<Wrapper animate={false} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
