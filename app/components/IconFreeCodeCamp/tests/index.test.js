import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconFreeCodeCamp from '../index';

describe('<IconFreeCodeCamp />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconFreeCodeCamp />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt props', () => {
    const renderedComponent = shallow(<IconFreeCodeCamp height="99px" width="99px" color="green" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
