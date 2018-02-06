import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import SpeechBubble from '../SpeechBubble';

describe('<SpeechBubble />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SpeechBubble />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
