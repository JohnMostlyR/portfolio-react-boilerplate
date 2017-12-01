import React from 'react';
import { shallow } from 'enzyme';

import H2 from '../H2';

describe('<H2 />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<H2 />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
