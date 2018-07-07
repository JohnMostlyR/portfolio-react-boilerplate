import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import List from '../List';

describe('<List />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<List bigScreenBreakpoint={1000} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isExpanded" property', () => {
    const renderedComponent = shallow(
      <List bigScreenBreakpoint={1} isExpanded />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
