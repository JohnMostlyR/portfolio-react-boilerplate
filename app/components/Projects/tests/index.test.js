import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Projects from '../index';

describe('<Projects />', () => {
  it('should render and match the snapshot', () => {
    const projects = [{
      date: '2016-01-01T00:00+02:00',
      description: 'Busy creating some new awesomeness.',
      externalLinks: [],
      subtitle: 'More to come!',
      thumbnail: { url: '#' },
      title: 'In progress...',
    }];
    const renderedComponent = shallow(<Projects projects={projects} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
