import React from 'react';
import renderer from 'react-test-renderer';

import Media from '../index';

describe('<Media />', () => {
  const IMAGE_SOURCE = '/tests.png';
  const IMAGE_ALT = 'test';

  it('should render and match the snapshot', () => {
    const wrapper = renderer.create(<Media imageAlt={IMAGE_ALT} imageSource={IMAGE_SOURCE} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should adopt children', () => {
    const wrapper = renderer.create(
      <Media imageAlt={IMAGE_ALT} imageSource={IMAGE_SOURCE}>
        {'Child'}
      </Media>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
