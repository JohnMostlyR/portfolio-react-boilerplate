import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Image from '../Image';

describe('<Image />', () => {
  const images = [
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
  ];

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Image images={images} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render when no images are provided', () => {
    const renderedComponent = shallow(<Image images={[]} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
