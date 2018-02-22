import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoadingComponent from '../index';

describe('<LoadingComponent />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<LoadingComponent />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "show" prop', () => {
    const renderedComponent = shallow(<LoadingComponent show />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showError" prop', () => {
    const renderedComponent = shallow(<LoadingComponent showError />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
