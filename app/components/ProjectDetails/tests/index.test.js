import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProjectDetails from '../index';

describe('<ProjectDetails />', () => {
  const project = Object.freeze({
    article: '# Article for test case\n\n[add attributes to link](https://the.world/)\n',
    description: 'Description for test case',
    images: [
      {
        file: {
          details: {
            image: {
              height: 10,
              width: 20,
            },
          },
          fileName: 'test-s.png',
          url: '/test-s.png',
        },
        title: 'Test image',
      },
      {
        file: {
          details: {
            image: {
              height: 20,
              width: 30,
            },
          },
          fileName: 'test-m.png',
          url: '/test-m.png',
        },
        title: 'Test image',
      },
      {
        file: {
          details: {
            image: {
              height: 30,
              width: 40,
            },
          },
          fileName: 'test-l.png',
          url: '/test-l.png',
        },
        title: 'Test image',
      },
      {
        file: {
          details: {
            image: {
              height: 50,
              width: 60,
            },
          },
          fileName: 'test-xl.png',
          url: '/test-xl.png',
        },
        title: 'Test image',
      },
    ],
    title: 'Title for test case',
  });

  it('Should adopt the "project" property', () => {
    const wrapper = shallow(<ProjectDetails project={project} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should handle case where "images" is not provided', () => {
    const projectWithImagesNotBeingAnArray = Object.assign({}, project, { images: [] });
    const wrapper = shallow(<ProjectDetails project={projectWithImagesNotBeingAnArray} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
