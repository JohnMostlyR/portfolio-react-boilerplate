import React from 'react';
import { shallow } from 'enzyme';

import ButtonIcon from '../ButtonIcon';

describe('<ButtonIcon />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ButtonIcon name={'meh-o'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
