import React from 'react';
import { shallow } from 'enzyme';

import ProjectExternalLink from '../ProjectExternalLink';

describe('ProjectExternalLink', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectExternalLink />);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
