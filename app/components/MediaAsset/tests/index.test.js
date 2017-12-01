import React from 'react';
import { shallow } from 'enzyme';

import MediaAsset from '../index';

describe('MediaAsset', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<MediaAsset imageSource={'/test.png'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "idOdd" prop', () => {
    const isOdd = false;
    const wrapper = shallow(
      <MediaAsset imageSource={'/test.png'} isOdd={isOdd} />
    );
    expect(wrapper.prop('isOdd')).toBe(isOdd);
  });
});
