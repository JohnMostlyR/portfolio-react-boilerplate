import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Arrow from '../Arrow';

describe('<Arrow />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Arrow />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  describe('arrowPosition property', () => {
    const renderedComponent = shallow(<Arrow />);

    it('should accept "top-left" as value', () => {
      const fixture = 'top-left';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(renderedComponent.prop('arrowPosition')).toBe(fixture);
    });

    it('should accept "top-right" as value', () => {
      const fixture = 'top-right';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(renderedComponent.prop('arrowPosition')).toBe(fixture);
    });

    it('should accept "bottom-right" as value', () => {
      const fixture = 'bottom-right';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(renderedComponent.prop('arrowPosition')).toBe(fixture);
    });

    it('should accept "bottom-left" as value', () => {
      const fixture = 'bottom-left';
      renderedComponent.setProps({ arrowPosition: fixture });
      expect(renderedComponent.prop('arrowPosition')).toBe(fixture);
    });
  });

  it('should adopt the "backgroundColor" prop', () => {
    const renderedComponent = shallow(<Arrow backgroundColor="#bada55" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "height" prop', () => {
    const renderedComponent = shallow(<Arrow height="1em" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isGhost" prop', () => {
    const renderedComponent = shallow(<Arrow isGhost />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showBreakpoint" prop', () => {
    const renderedComponent = shallow(<Arrow showBreakpoint="100px" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
