import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectsList from '../ProjectsList';

describe('<ProjectsList />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ProjectsList />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
