import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MediaAsset from '../index';

describe('MediaAsset', () => {
  const fixture = {
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
  };

  it('should render and match the snapshot', () => {
    const wrapper = shallow(<MediaAsset imageSource={fixture} isOdd />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should adopt the "idOdd" prop', () => {
    const isOdd = false;
    const wrapper = shallow(<MediaAsset imageSource={fixture} isOdd={isOdd} />);
    expect(wrapper.prop('isOdd')).toBe(isOdd);
  });
});
