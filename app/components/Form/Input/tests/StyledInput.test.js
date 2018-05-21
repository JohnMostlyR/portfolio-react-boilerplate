import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledInput from '../StyledInput';

describe('<StyledInput />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledInput />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
