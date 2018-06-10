import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProjectDetails from '../index';

describe('<ProjectDetails />', () => {
  const project = Object.freeze({
    article: '# Article for test case\n\n[add attributes to link](https://the.world/)\n',
    description: 'Description for test case',
    images: [
      { file: { fileName: 'test-s.png', url: '/test-s.png' }, title: 'Test image' },
      { file: { fileName: 'test-m.png', url: '/test-m.png' }, title: 'Test image' },
      { file: { fileName: 'test-l.png', url: '/test-l.png' }, title: 'Test image' },
      { file: { fileName: 'test-xl.png', url: '/test-xl.png' }, title: 'Test image' },
    ],
    title: 'Title for test case',
  });

  it('Should render without any given properties', () => {
    const wrapper = shallow(<ProjectDetails />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "project" property', () => {
    const wrapper = shallow(<ProjectDetails project={project} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should handle case where "images" is not an Array', () => {
    const projectWithImagesNotBeingAnArray = Object.assign({}, project, { images: '' });
    const wrapper = shallow(<ProjectDetails project={projectWithImagesNotBeingAnArray} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
