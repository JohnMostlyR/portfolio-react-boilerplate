import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ListItem from '../ListItem';

describe('<ListItem />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ListItem />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
