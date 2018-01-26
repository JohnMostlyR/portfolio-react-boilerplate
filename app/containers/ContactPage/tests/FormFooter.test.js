import React from 'react';
import { shallow } from 'enzyme';

import FormFooter from '../FormFooter';

describe('<FormFooter />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<FormFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
