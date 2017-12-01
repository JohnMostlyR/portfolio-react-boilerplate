import React from 'react';
import { shallow } from 'enzyme';

import StyledUL from '../StyledUL';

describe('<StyledUL />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledUL />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
