import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import BrandLink from '../BrandLink';

describe('<BrandLink />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<BrandLink />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "href" prop', () => {
    const hrefProp = '/tests';
    const renderedComponent = shallow(<BrandLink href={hrefProp} />);
    expect(renderedComponent.prop('href')).toBe(hrefProp);
  });

  it('should adopt the "showNameBreakpoint" prop', () => {
    const showNameBreakpoint = '100px';
    const renderedComponent = shallow(
      <BrandLink href="/" showNameBreakpoint={showNameBreakpoint} />,
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "title" prop', () => {
    const title = 'Test';
    const renderedComponent = shallow(<BrandLink title={title} />);
    expect(renderedComponent.prop('title')).toBe(title);
  });
});
