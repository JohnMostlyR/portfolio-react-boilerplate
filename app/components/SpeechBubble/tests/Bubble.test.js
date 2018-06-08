import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Bubble from '../Bubble';

describe('<Bubble />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Bubble />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" prop', () => {
    const renderedComponent = shallow(<Bubble backgroundColor={'white'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "color" prop', () => {
    const renderedComponent = shallow(<Bubble color={'white'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isGhost" prop', () => {
    const renderedComponent = shallow(<Bubble isGhost />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "padding" prop', () => {
    const renderedComponent = shallow(<Bubble padding={'0 1em'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showArrowBreakpoint" prop', () => {
    const renderedComponent = shallow(<Bubble showArrowBreakpoint={'10rem'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  describe('arrowPosition property', () => {
    const renderedComponent = shallow(<Bubble />);

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
