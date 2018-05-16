import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" property', () => {
    const color = '#bada55';
    const renderedComponent = shallow(<Header backgroundColor={color} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
