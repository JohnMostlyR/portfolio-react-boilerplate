import React from 'react';
import { shallow } from 'enzyme';

import { AboutPage } from '../index';

describe('<AboutPage />', () => {
  it('should render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<AboutPage getContent={getContent} />);
    expect(wrapper).toMatchSnapshot();
  });
});
