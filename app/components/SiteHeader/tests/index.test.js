import React from 'react';
import { shallow } from 'enzyme';

import SiteHeader from '../index';

describe('SiteHeader', () => {
  it('should render', () => {
    const setSiteNavIsFixedOffset = jest.fn();
    const wrapper = shallow(
      <SiteHeader
        setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}
        siteNavIsAtScreenTop={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
