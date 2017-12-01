import React from 'react';
import { shallow } from 'enzyme';

import ProjectLinksList from '../ProjectLinksList';

describe('ProjectLinksList', () => {
  const links = [
    {
      name: 'github',
      url: 'https://github.com/',
      faIcon: 'github',
    },
    {
      name: 'codepen',
      url: 'https://codepen.io/',
      faIcon: 'codepen',
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectLinksList links={links} />);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
