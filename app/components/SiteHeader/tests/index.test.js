import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SiteHeader from '../index';

describe('<SiteHeader />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<SiteHeader />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
