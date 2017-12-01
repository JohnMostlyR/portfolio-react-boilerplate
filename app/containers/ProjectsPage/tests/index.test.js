import React from 'react';
import { shallow } from 'enzyme';

import { ProjectsPage } from '../index';

describe('<ProjectsPage />', () => {
  it('Expect to render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<ProjectsPage getContent={getContent} />);
    expect(wrapper).toMatchSnapshot();
  });
});
