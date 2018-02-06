import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import SiteNavigation from '../SiteNavigation';

describe('<SiteNavigation />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SiteNavigation />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isAtScreenTop" prop', () => {
    const isAtScreenTop = false;
    const renderedComponent = mount(<SiteNavigation isAtScreenTop={isAtScreenTop} />);
    expect(renderedComponent.prop('isAtScreenTop')).toBe(isAtScreenTop);
  });
});
