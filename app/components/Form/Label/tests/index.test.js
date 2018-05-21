import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Label from '../index';

describe('<Label />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Label />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
