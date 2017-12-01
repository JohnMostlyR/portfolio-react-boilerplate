import React from 'react';
import { shallow } from 'enzyme';

import ImageWrapper from '../ImageWrapper';

describe('<ImageWrapper />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ImageWrapper imageSource={'./test.png'} imageAlt={'Test'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
