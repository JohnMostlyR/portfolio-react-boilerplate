import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Aside from '../Aside';

describe('<Aside />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Aside />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
