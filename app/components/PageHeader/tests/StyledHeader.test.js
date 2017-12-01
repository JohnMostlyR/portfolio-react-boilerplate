import React from 'react';
import renderer from 'react-test-renderer';

import StyledHeader from '../StyledHeader';

describe('<StyledHeader />', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<StyledHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
