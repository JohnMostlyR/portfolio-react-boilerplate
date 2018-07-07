import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Article from '../index';

describe('<Article />', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });
});
