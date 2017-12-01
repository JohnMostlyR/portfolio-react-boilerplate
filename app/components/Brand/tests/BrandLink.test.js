import React from 'react';
import { shallow, mount } from 'enzyme';

import BrandLink from '../BrandLink';

describe('<BrandLink />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<BrandLink />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "href" prop', () => {
    const hrefProp = '/tests';
    const renderedComponent = mount(<BrandLink href={hrefProp} />);
    expect(renderedComponent.prop('href')).toBe(hrefProp);
  });
});
