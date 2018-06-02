import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import SubmitButton from '../index';

describe('SubmitButton', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<SubmitButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should adopt the "formIsValid" property', () => {
    const wrapper = shallow(<SubmitButton formIsValid />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('when the `state` changes', () => {
    let wrapper;

    it('should change its appearance when state is `sending`', () => {
      wrapper = shallow(<SubmitButton formIsValid buttonState={'sending'} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should change its appearance when state is `success`', () => {
      wrapper = shallow(<SubmitButton formIsValid buttonState={'success'} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should change its appearance when state is `error`', () => {
      wrapper = shallow(<SubmitButton formIsValid buttonState={'error'} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
