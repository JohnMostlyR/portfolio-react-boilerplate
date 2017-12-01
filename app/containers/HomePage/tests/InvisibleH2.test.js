import React from 'react';
import { shallow } from 'enzyme';

import InvisibleH2 from '../InvisibleH2';

describe('<InvisibleH2 />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<InvisibleH2 />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
