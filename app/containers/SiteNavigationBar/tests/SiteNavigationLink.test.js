import React from 'react';
import { shallow } from 'enzyme';

import SiteNavigationLink from '../SiteNavigationLink';

describe('<SiteNavigationLink />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SiteNavigationLink to={'/'} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
