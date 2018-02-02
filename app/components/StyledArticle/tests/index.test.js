import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledSection from '../index';

describe('StyledArticle', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<StyledSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
