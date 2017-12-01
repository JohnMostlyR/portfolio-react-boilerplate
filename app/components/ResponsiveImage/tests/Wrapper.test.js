import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = renderer.create(<Wrapper />);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  describe('"noPlaceholder" prop', () => {
    it('should exist and have a default value', () => {
      const wrapper = mount(<Wrapper />);
      expect(wrapper.prop('noPlaceholder')).toBeDefined();
    });

    it('should accept "false" as value', () => {
      const noPlaceholder = false;
      const wrapper = mount(<Wrapper noPlaceholder={noPlaceholder} />);
      expect(wrapper.prop('noPlaceholder')).toBe(noPlaceholder);
    });

    it('should accept "true" as value', () => {
      const noPlaceholder = true;
      const wrapper = mount(<Wrapper noPlaceholder={noPlaceholder} />);
      expect(wrapper.prop('noPlaceholder')).toBe(noPlaceholder);
    });
  });

  describe('"ratio" prop', () => {
    it('should accept "1by1" as value', () => {
      const ratio = '1by1';
      const wrapper = mount(<Wrapper ratio={ratio} />);
      expect(wrapper.prop('ratio')).toBe(ratio);
    });

    it('should accept "4by3" as value', () => {
      const ratio = '4by3';
      const wrapper = mount(<Wrapper ratio={ratio} />);
      expect(wrapper.prop('ratio')).toBe(ratio);
    });

    it('should accept "16by9" as value', () => {
      const ratio = '16by9';
      const wrapper = mount(<Wrapper ratio={ratio} />);
      expect(wrapper.prop('ratio')).toBe(ratio);
    });
  });
});
