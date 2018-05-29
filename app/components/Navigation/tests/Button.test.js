import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../Button';

describe('<Button />', () => {
  const toggleMenu = jest.fn();
  const buttonRef = jest.fn();

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <Button
        bigScreenBreakpoint={1000}
        buttonRef={buttonRef}
        toggleMenu={toggleMenu}
      />
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "label" property', () => {
    const PROPERTY_VALUE = 'Test';
    const renderedComponent = shallow(
      <Button
        bigScreenBreakpoint={1000}
        buttonRef={buttonRef}
        toggleMenu={toggleMenu}
        label={PROPERTY_VALUE}
      />
    );

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isExpanded" property', () => {
    const PROPERTY_VALUE = true;
    const renderedComponent = shallow(
      <Button
        bigScreenBreakpoint={1000}
        buttonRef={buttonRef}
        isExpanded={PROPERTY_VALUE}
        toggleMenu={toggleMenu}
      />
    );

    expect(renderedComponent.prop('aria-expanded')).toBe(PROPERTY_VALUE);
  });

  describe('The "toggleMenu" property', () => {
    const stopPropagation = jest.fn();
    const preventDefault = jest.fn();
    let renderedComponent = null;

    beforeEach(() => {
      renderedComponent = shallow(
        <Button
          bigScreenBreakpoint={1000}
          buttonRef={buttonRef}
          toggleMenu={toggleMenu}
        />
      );
    });

    afterEach(() => {
      stopPropagation.mockClear();
      preventDefault.mockClear();
      toggleMenu.mockClear();
    });

    it('should get called on a click event', () => {
      renderedComponent.simulate(
        'click',
        {
          stopPropagation,
          preventDefault,
        });
      expect(stopPropagation).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Enter" key is pressed', () => {
      const KEY_CODE = 13;
      renderedComponent.simulate(
        'KeyDown',
        {
          stopPropagation,
          preventDefault,
          keyCode: KEY_CODE,
        });
      expect(stopPropagation).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Space" key is pressed', () => {
      const KEY_CODE = 32;
      renderedComponent.simulate(
        'KeyDown',
        {
          stopPropagation,
          preventDefault,
          keyCode: KEY_CODE,
        });
      expect(stopPropagation).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Arrow Down" key is pressed', () => {
      const KEY_CODE = 40;
      renderedComponent.simulate(
        'KeyDown',
        {
          stopPropagation,
          preventDefault,
          keyCode: KEY_CODE,
        });
      expect(stopPropagation).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should NOT get called when any other key is pressed', () => {
      const KEY_CODE = 0;
      renderedComponent.simulate(
        'KeyDown',
        {
          stopPropagation,
          preventDefault,
          keyCode: KEY_CODE,
        });
      expect(stopPropagation).toHaveBeenCalledTimes(0);
      expect(preventDefault).toHaveBeenCalledTimes(0);
      expect(toggleMenu).toHaveBeenCalledTimes(0);
    });
  });
});
