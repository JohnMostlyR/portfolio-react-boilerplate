import React from 'react';
import { shallow } from 'enzyme';

import SpeechBubble from '../SpeechBubble';

describe('<SpeechBubble />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SpeechBubble />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
