import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageContent from '../index';

describe('<PageContent />', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<PageContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "title" property', () => {
    const wrapper = shallow(<PageContent title={'Testing'} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "content" property', () => {
    const wrapper = shallow(<PageContent content={'Testing'} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "noSpeechBubble" property', () => {
    const wrapper = shallow(<PageContent content={'Testing'} noSpeechBubble />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
