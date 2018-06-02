import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconGithub from '../index';

describe('<IconGithub />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconGithub />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt props', () => {
    const renderedComponent = shallow(<IconGithub height="99px" width="99px" color="green" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
