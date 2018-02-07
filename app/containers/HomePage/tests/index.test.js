import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
