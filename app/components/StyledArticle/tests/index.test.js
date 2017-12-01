import React from 'react';
import renderer from 'react-test-renderer';

import StyledSection from '../index';

describe('StyledArticle', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<StyledSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
