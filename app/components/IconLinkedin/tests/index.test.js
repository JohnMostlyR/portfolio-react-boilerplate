import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconLinkedin from '../index';

describe('<IconLinkedin />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconLinkedin />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt props', () => {
    const renderedComponent = shallow(
      <IconLinkedin height="99px" width="99px" color="green" />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
