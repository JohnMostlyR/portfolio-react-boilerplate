import React from 'react';
import { shallow } from 'enzyme';

import FullHeightColumn from '../FullHeightColumn';

describe('<FullHeightColumn />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<FullHeightColumn />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
