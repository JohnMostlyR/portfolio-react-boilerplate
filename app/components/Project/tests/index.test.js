import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Project from '../index';

describe('Project', () => {
  const thumbnail = {
    file: {
      contentType: 'image/png',
      details: {
        image: {
          height: 230,
          width: 345,
        },
        size: 22495,
      },
      fileName: 'medium-m.png',
      url: '/medium-m.png',
    },
    title:
      'Presentation showing how this project looks on mobile, tablet and desktop screens',
  };
  const title = 'This is the title field for Project 1';
  const description = 'This is the description field Project 1';

  it('should render and match the snapshot', () => {
    const wrapper = shallow(
      <Project
        thumbnail={thumbnail}
        title={title}
        detailsBodyText={description}
        isOdd
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should adopt the "isOdd" property', () => {
    const wrapper = shallow(
      <Project
        thumbnail={thumbnail}
        title={title}
        detailsBodyText={description}
        isOdd={false}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
