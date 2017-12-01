import React from 'react';
import { shallow } from 'enzyme';

import Article from '../Article';

describe('<Article />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });
});
