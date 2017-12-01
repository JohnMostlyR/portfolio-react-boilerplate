import React from 'react';
import renderer from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
