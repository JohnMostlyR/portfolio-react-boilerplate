import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconCodepen from '../index';

describe('<IconCodepen />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconCodepen />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt props', () => {
    const renderedComponent = shallow(
      <IconCodepen height="99px" width="99px" color="green" />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
