import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledMain from '../StyledMain';

describe('<StyledMain />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledMain />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "fixedSiteNavOffset" property', () => {
    const renderedComponent = shallow(<StyledMain fixedSiteNavOffset={10} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "siteNavIsFixed" property', () => {
    const renderedComponent = shallow(<StyledMain siteNavIsFixed />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
