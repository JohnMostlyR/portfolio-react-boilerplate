import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Projects from '../index';
import ProjectsListItem from '../ProjectsListItem';

const PROJECTS = [
  {
    date: '2017-10-22T00:00+02:00',
    description: 'My portfolio website, now build with React',
    externalLinks: [
      {
        faIcon: 'github',
        name: 'github',
        url: 'https://github.com/Mensae/portfolio-react',
      },
      {
        faIcon: 'globe',
        name: 'world',
        url: 'https://meester-johan.info/',
      }],
    thumbnail: {
      contentType: 'image/png',
      details: { image: { height: 720, width: 1280 }, size: 171379 },
      fileName: 'my-portfolio-16x9.png',
      url: '/my-portfolio-16x9.png',
    },
    title: 'My Portfolio',
  },
  {
    date: '2016-01-01T00:00+02:00',
    description: 'Busy creating some new awesomeness.',
    externalLinks: [],
    subtitle: 'More to come!',
    thumbnail: { url: '#' },
    title: 'In progress...',
  },
];

describe('<Projects />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Projects projects={PROJECTS} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should should have the default state', () => {
    const renderedComponent = shallow(<Projects projects={PROJECTS} />);
    expect(renderedComponent.state().itemHasFocus).toBeFalsy();
  });

  describe('When an item receives focus', () => {
    it('should update the state with the title of the item that has focus', () => {
      const renderedComponent = shallow(<Projects projects={PROJECTS} />);
      const items = renderedComponent.find(ProjectsListItem);
      const firstItem = items.first();
      const lastItem = items.last();
      firstItem.simulate('focus');
      expect(renderedComponent.state().itemHasFocus).toEqual(PROJECTS[0].title);
      lastItem.simulate('focus');
      expect(renderedComponent.state().itemHasFocus).toEqual(PROJECTS[1].title);
    });
  });


  describe('When the mouse enters an item', () => {
    it('should update the state with the title of the item where the mouse has entered', () => {
      const renderedComponent = shallow(<Projects projects={PROJECTS} />);
      const items = renderedComponent.find(ProjectsListItem);
      const firstItem = items.first();
      const lastItem = items.last();
      firstItem.simulate('mouseOver');
      expect(renderedComponent.state().itemHasFocus).toEqual(PROJECTS[0].title);
      lastItem.simulate('mouseOver');
      expect(renderedComponent.state().itemHasFocus).toEqual(PROJECTS[1].title);
    });
  });
});
