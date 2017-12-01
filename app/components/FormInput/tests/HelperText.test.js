import React from 'react';
import { shallow } from 'enzyme';

import HelperText from '../HelperText';

describe('<HelperText />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<HelperText />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
