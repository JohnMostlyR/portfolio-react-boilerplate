import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Description from '../Description';

describe('<Description />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Description />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
