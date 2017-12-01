import React from 'react';
import { shallow } from 'enzyme';

import Textarea from '../Textarea';

describe('<Textarea />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Textarea />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
