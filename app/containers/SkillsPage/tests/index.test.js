import React from 'react';
import { shallow } from 'enzyme';

import { SkillsPage } from '../index';

describe('<SkillsPage />', () => {
  it('should render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<SkillsPage getContent={getContent} />);
    expect(wrapper).toMatchSnapshot();
  });
});
