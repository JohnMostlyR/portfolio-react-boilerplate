import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ChildrenWrapper from '../ChildrenWrapper';

describe('<ChildrenWrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ChildrenWrapper />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
