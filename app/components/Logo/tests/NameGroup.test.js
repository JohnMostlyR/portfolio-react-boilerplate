import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import NameGroup from '../NameGroup';

describe('<NameGroup />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<NameGroup />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "fontFamily" property', () => {
    const fixture = ['Arial', 'sans-serif'];
    const renderedComponent = shallow(<NameGroup fontFamily={fixture} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showNameBreakpoint" property', () => {
    const fixture = '10px';
    const renderedComponent = shallow(
      <NameGroup showNameBreakpoint={fixture} />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
