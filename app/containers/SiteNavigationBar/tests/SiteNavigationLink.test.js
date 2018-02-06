import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import SiteNavigationLink from '../SiteNavigationLink';

describe('<SiteNavigationLink />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SiteNavigationLink to={'/'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
