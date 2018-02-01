import React from 'react';
import renderer from 'react-test-renderer';

import StyledA from '../StyledA';

describe('<StyledA>', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<StyledA />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
