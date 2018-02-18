import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SpeechBubble from '../index';

describe('<SpeechBubble />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SpeechBubble />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "padding" prop', () => {
    const renderedComponent = shallow(<SpeechBubble padding={'0 0px'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isLeftHanded" prop', () => {
    const renderedComponent = shallow(<SpeechBubble isLeftHanded={false} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" prop', () => {
    const renderedComponent = shallow(<SpeechBubble backgroundColor={'#000'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showArrowBreakpoint" prop', () => {
    const renderedComponent = shallow(<SpeechBubble showArrowBreakpoint={'100px'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "maxWidth" prop', () => {
    const renderedComponent = shallow(<SpeechBubble maxWidth={'10em'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "arrowHeight" prop', () => {
    const renderedComponent = shallow(<SpeechBubble arrowHeight={'1vw'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt any children', () => {
    const renderedComponent = shallow(<SpeechBubble><span>A Child</span></SpeechBubble>);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
