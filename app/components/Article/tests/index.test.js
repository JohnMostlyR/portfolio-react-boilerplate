import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Article from '../index';

describe('<Article />', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<Article />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
