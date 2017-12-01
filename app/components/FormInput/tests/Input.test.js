import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('<Input />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Input />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
