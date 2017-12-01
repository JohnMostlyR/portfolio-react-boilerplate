import React from 'react';
import { shallow, mount } from 'enzyme';

import StyledMain from '../index';

describe('<StyledMain />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledMain />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the fixedSiteNavOffset prop', () => {
    const fixedSiteNavOffset = 10;
    const renderedComponent = mount(<StyledMain fixedSiteNavOffset={fixedSiteNavOffset} />);
    expect(renderedComponent.prop('fixedSiteNavOffset')).toBe(fixedSiteNavOffset);
    renderedComponent.unmount();
  });

  it('should adopt the siteNavIsFixed prop', () => {
    const siteNavIsFixed = false;
    const renderedComponent = mount(<StyledMain siteNavIsFixed={siteNavIsFixed} />);
    expect(renderedComponent.prop('siteNavIsFixed')).toBe(siteNavIsFixed);
    renderedComponent.unmount();
  });
});
