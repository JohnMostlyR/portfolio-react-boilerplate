import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ImageWrapper from '../ImageWrapper';

describe('<ImageWrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ImageWrapper />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
