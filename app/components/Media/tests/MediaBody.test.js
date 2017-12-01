import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MediaBody from '../MediaBody';

describe('<MediaBody />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = renderer.create(<MediaBody />);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  describe('"bodyAlign" prop', () => {
    it('should exist', () => {
      const wrapper = mount(<MediaBody />);
      expect(wrapper.prop('bodyAlign')).toBeTruthy();
    });

    it('should adopt "top" as value', () => {
      const bodyAlign = 'top';
      const wrapper = mount(<MediaBody bodyAlign={bodyAlign} />);
      expect(wrapper.prop('bodyAlign')).toBe(bodyAlign);
    });

    it('should adopt "middle" as value', () => {
      const bodyAlign = 'middle';
      const wrapper = mount(<MediaBody bodyAlign={bodyAlign} />);
      expect(wrapper.prop('bodyAlign')).toBe(bodyAlign);
    });

    it('should adopt "bottom" as value', () => {
      const bodyAlign = 'bottom';
      const wrapper = mount(<MediaBody bodyAlign={bodyAlign} />);
      expect(wrapper.prop('bodyAlign')).toBe(bodyAlign);
    });
  });

  describe('"reverse" prop', () => {
    it('should exist', () => {
      const wrapper = mount(<MediaBody />);
      expect(wrapper.prop('reverse')).toBeDefined();
    });

    it('should adopt "true" as value', () => {
      const reverse = true;
      const wrapper = mount(<MediaBody reverse={reverse} />);
      expect(wrapper.prop('reverse')).toBe(reverse);
    });

    it('should adopt "false" as value', () => {
      const reverse = false;
      const wrapper = mount(<MediaBody reverse={reverse} />);
      expect(wrapper.prop('reverse')).toBe(reverse);
    });
  });
});
