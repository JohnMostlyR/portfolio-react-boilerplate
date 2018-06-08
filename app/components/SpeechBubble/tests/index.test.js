import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SpeechBubble from '../index';

describe('<SpeechBubble />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<SpeechBubble />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "arrowHeight" prop', () => {
    const renderedComponent = shallow(<SpeechBubble arrowHeight={'1vw'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" prop', () => {
    const renderedComponent = shallow(<SpeechBubble backgroundColor={'#000'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "color" prop', () => {
    const renderedComponent = shallow(<SpeechBubble color={'#fff'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "maxWidth" prop', () => {
    const renderedComponent = shallow(<SpeechBubble maxWidth={'10em'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "padding" prop', () => {
    const renderedComponent = shallow(<SpeechBubble padding={'0 0px'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showArrowBreakpoint" prop', () => {
    const renderedComponent = shallow(<SpeechBubble showArrowBreakpoint={'100px'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt any children', () => {
    const renderedComponent = shallow(<SpeechBubble><span>A Child</span></SpeechBubble>);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  describe('the "isGhost" property', () => {
    it('should accept boolean "true" as value', () => {
      const renderedComponent = shallow(<SpeechBubble isGhost />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('should accept boolean "false" as value', () => {
      const renderedComponent = shallow(<SpeechBubble isGhost={false} />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });

  describe('the "makeAppear" property', () => {
    it('should accept boolean "true" as value', () => {
      const renderedComponent = shallow(<SpeechBubble makeAppear />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('should accept boolean "false" as value', () => {
      const renderedComponent = shallow(<SpeechBubble makeAppear={false} />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });

  describe('the arrowPosition property', () => {
    const renderedComponent = shallow(<SpeechBubble />);

    it('should accept "top-left" as value', () => {
      const fixture = 'top-left';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('should accept "top-right" as value', () => {
      const fixture = 'top-right';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('should accept "bottom-right" as value', () => {
      const fixture = 'bottom-right';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('should accept "bottom-left" as value', () => {
      const fixture = 'bottom-left';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });
});
