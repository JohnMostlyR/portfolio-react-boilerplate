import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import InlineLink from '../index';

describe('<InlineLink />', () => {
  it('Should render and match the snapshot', () => {
    const renderedComponent = shallow(<InlineLink to="/" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
