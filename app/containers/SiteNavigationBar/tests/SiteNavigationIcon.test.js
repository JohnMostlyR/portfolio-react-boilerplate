import React from 'react';
import { shallow, mount } from 'enzyme';

import SiteNavigationIcon from '../SiteNavigationIcon';

describe('<SiteNavigationIcon />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SiteNavigationIcon />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "name" prop', () => {
    const name = 'check';
    const renderedComponent = mount(<SiteNavigationIcon name={name} />);
    expect(renderedComponent.prop('name')).toBe(name);
  });

  it('should adopt the "fixedWidth" prop', () => {
    const fixedWidth = true;
    const renderedComponent = mount(<SiteNavigationIcon name={'check'} fixedWidth={fixedWidth} />);
    expect(renderedComponent.prop('fixedWidth')).toBe(fixedWidth);
  });
});
