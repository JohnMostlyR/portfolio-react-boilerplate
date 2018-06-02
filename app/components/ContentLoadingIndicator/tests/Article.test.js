import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Article from '../Article';

describe('<Article />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Article />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "show" property', () => {
    const renderedComponent = shallow(<Article show />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
