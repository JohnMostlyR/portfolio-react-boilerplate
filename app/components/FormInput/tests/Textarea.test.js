import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Textarea from '../Textarea';

describe('<Textarea />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Textarea />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
