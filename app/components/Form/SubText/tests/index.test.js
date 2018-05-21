import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import SubText from '../index';

describe('<SubText />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SubText />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
