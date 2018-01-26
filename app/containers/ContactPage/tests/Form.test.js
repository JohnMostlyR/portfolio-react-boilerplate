import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

describe('<Form />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
