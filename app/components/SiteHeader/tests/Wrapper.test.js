import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" property', () => {
    const color = '#bada55';
    const renderedComponent = shallow(<Wrapper borderColor={color} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
