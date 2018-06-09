import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Image from '../Image';

describe('<Image />', () => {
  const images = [
    { file: { fileName: 'test-s.png', url: '/test-s.png' }, title: 'Test image' },
    { file: { fileName: 'test-m.png', url: '/test-m.png' }, title: 'Test image' },
    { file: { fileName: 'test-l.png', url: '/test-l.png' }, title: 'Test image' },
    { file: { fileName: 'test-xl.png', url: '/test-xl.png' }, title: 'Test image' },
  ];

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Image images={images} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
