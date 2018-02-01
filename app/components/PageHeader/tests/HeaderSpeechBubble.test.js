import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import HeaderSpeechBubble from '../HeaderSpeechBubble';

describe('<HeaderSpeechBubble />', () => {
  it('Should render and match the snapshot', () => {
    const tree = shallow(<HeaderSpeechBubble />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Should adopt the "isLeftHanded" prop', () => {
    const tree = mount(<HeaderSpeechBubble isLeftHanded={false} />);
    expect(tree.prop('isLeftHanded')).toBe(false);
  });
});
