import React from 'react';
import { shallow, mount } from 'enzyme';

import SiteNavigation from '../SiteNavigation';

describe('<SiteNavigation />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SiteNavigation />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "isAtScreenTop" prop', () => {
    const isAtScreenTop = false;
    const renderedComponent = mount(<SiteNavigation isAtScreenTop={isAtScreenTop} />);
    expect(renderedComponent.prop('isAtScreenTop')).toBe(isAtScreenTop);
  });
});
