import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ErrorMessage from '../index';

describe('<ErrorMessage />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ErrorMessage />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showError" prop', () => {
    let showError;
    let renderedComponent;

    showError = false;
    renderedComponent = mount(<ErrorMessage showError={showError} />);
    expect(renderedComponent.prop('showError')).toBe(showError);

    showError = true;
    renderedComponent = mount(<ErrorMessage showError={showError} />);
    expect(renderedComponent.prop('showError')).toBe(showError);
  });
});
