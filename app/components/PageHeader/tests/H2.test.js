import React from 'react';
import renderer from 'react-test-renderer';

import H2 from '../H2';

describe('<H2 />', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<H2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
