import React from 'react';
import { shallow } from 'enzyme';

import ProjectsListItem from '../ProjectsListItem';

describe('<ProjectsListItem />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ProjectsListItem />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
