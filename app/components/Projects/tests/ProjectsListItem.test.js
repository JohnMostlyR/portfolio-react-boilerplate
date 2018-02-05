import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ProjectsListItem from '../ProjectsListItem';

describe('<ProjectsListItem />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ProjectsListItem />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
