import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MediaImage from '../MediaImage';

describe('<MediaImage />', () => {
  const src = '/test.png';
  const alt = 'test';

  it('should render and match the snapshot', () => {
    const wrapper = renderer.create(
      <MediaImage imageSource={src} imageAlt={alt} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render an <img /> element', () => {
    const wrapper = mount(<MediaImage imageSource={src} imageAlt={alt} />);
    expect(wrapper.containsMatchingElement(<img src={src} alt={alt} />)).toBe(
      true,
    );
    wrapper.unmount();
  });

  describe('should adopt the "imageAlign" prop', () => {
    let imageAlign = '';
    let wrapper = null;

    it('set to "top"', () => {
      imageAlign = 'top';
      wrapper = shallow(
        <MediaImage imageSource={src} imageAlt={alt} imageAlign={imageAlign} />,
      );
      expect(wrapper.prop('imageAlign')).toBe(imageAlign);
      expect(wrapper).toMatchSnapshot();
    });

    it('set to "middle"', () => {
      imageAlign = 'middle';
      wrapper = shallow(
        <MediaImage imageSource={src} imageAlt={alt} imageAlign={imageAlign} />,
      );
      expect(wrapper.prop('imageAlign')).toBe(imageAlign);
      expect(wrapper).toMatchSnapshot();
    });

    it('set to "bottom"', () => {
      imageAlign = 'bottom';
      wrapper = shallow(
        <MediaImage imageSource={src} imageAlt={alt} imageAlign={imageAlign} />,
      );
      expect(wrapper.prop('imageAlign')).toBe(imageAlign);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should adopt the "imageHeight" prop', () => {
    const imageHeight = '10px';
    const wrapper = shallow(
      <MediaImage
        imageSource="/test.png"
        imageAlt="test"
        imageHeight={imageHeight}
      />,
    );
    expect(wrapper.prop('imageHeight')).toBe(imageHeight);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "imageWidth" prop', () => {
    const imageWidth = '10px';
    const wrapper = shallow(
      <MediaImage
        imageSource="/test.png"
        imageAlt="test"
        imageWidth={imageWidth}
      />,
    );
    expect(wrapper.prop('imageWidth')).toBe(imageWidth);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "reverse" prop', () => {
    const reverse = false;
    const wrapper = shallow(
      <MediaImage imageSource="/test.png" imageAlt="test" reverse={reverse} />,
    );
    expect(wrapper.prop('reverse')).toBe(reverse);
    expect(wrapper).toMatchSnapshot();
  });
});
