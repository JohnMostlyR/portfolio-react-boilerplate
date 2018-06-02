import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import P from '../index';

describe('<P />', () => {
  it('Should render and match the snapshot', () => {
    const renderedComponent = shallow(<P />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
