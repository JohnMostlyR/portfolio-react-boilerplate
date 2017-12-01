import React from 'react';
import renderer from 'react-test-renderer';

import VisuallyHiddenSpan from '../VisuallyHiddenSpan';

describe('VisuallyHiddenSpan', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<VisuallyHiddenSpan />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
