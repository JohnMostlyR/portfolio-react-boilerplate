import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoadingComponent from '../index';

describe('<LoadingComponent />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<LoadingComponent />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "error" prop', () => {
    const renderedComponent = shallow(<LoadingComponent error />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "timedOut" prop', () => {
    const renderedComponent = shallow(<LoadingComponent timedOut />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "pastDelay" prop', () => {
    const renderedComponent = shallow(<LoadingComponent pastDelay />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
