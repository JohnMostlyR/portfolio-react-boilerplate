import React from 'react';
import renderer from 'react-test-renderer';

import StyledUL from '../StyledUL';

describe('StyledUL', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<StyledUL />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
