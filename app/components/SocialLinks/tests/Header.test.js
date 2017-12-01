import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

describe('Header', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
