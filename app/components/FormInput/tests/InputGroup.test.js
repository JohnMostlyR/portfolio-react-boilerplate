import React from 'react';
import { shallow } from 'enzyme';

import InputGroup from '../InputGroup';

describe('<InputGroup />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<InputGroup />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
