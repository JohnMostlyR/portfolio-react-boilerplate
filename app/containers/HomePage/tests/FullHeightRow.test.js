import React from 'react';
import { shallow } from 'enzyme';

import FullHeightRow from '../FullHeightRow';

describe('<FullHeightRow />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<FullHeightRow />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
