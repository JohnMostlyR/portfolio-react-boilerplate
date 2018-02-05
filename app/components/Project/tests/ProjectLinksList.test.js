import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

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
    wrapper = toJson(shallow(<ProjectLinksList links={links} />));
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
