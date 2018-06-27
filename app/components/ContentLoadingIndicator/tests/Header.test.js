import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Header from '../Header';

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt children', () => {
    const renderedComponent = shallow(<Header>Child</Header>);
    expect(renderedComponent).toMatchSnapshot();
  });
});
