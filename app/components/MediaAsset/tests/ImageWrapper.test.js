import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ImageWrapper from '../ImageWrapper';

describe('<ImageWrapper />', () => {
  it('should render and match the snapshot', () => {
    const fixture = {
      height: 10,
      width: 100,
    };
    const wrapper = shallow(<ImageWrapper imageDimensions={fixture} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render and match the snapshot without any props', () => {
    const wrapper = shallow(<ImageWrapper />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
