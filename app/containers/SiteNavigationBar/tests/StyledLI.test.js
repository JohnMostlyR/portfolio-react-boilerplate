import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledLI from '../StyledLI';

describe('<StyledLI />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledLI />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
