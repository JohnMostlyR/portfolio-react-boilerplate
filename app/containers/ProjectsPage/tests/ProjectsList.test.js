import React from 'react';
import { shallow } from 'enzyme';

import ProjectsList from '../ProjectsList';

describe('<ProjectsList />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ProjectsList />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
