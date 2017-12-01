import React from 'react';
import renderer from 'react-test-renderer';
import SpeechBubble from '../index';

describe('SpeechBubble', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<SpeechBubble />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
