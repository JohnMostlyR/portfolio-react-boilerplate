import React from 'react';
import { shallow } from 'enzyme';

import Label from '../Label';

describe('<Label />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Label />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
