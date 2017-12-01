import React from 'react';
import { shallow } from 'enzyme';

import Img from '../index';

describe('<Img />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Img />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
