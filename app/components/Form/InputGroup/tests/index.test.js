import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import InputGroup from '../index';

describe('<InputGroup />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<InputGroup />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
