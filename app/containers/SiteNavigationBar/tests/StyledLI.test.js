import React from 'react';
import { shallow } from 'enzyme';

import StyledLI from '../StyledLI';

describe('<StyledLI />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledLI />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
