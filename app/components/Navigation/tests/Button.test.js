import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../Button';

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <Button
        bigScreenBreakpoint={1000}
      />
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "label" property', () => {
    const PROPERTY_VALUE = 'Test';
    const renderedComponent = shallow(
      <Button
        bigScreenBreakpoint={1000}
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
        isExpanded={PROPERTY_VALUE}
      />
    );

    expect(renderedComponent.prop('aria-expanded')).toBe(PROPERTY_VALUE);
  });

  it('should adopt the "buttonRef" property', () => {
    const PROPERTY_VALUE = jest.fn();
    mount(
      <Button
        bigScreenBreakpoint={1000}
        buttonRef={PROPERTY_VALUE}
      />
    );

    expect(PROPERTY_VALUE).toHaveBeenCalledTimes(1);
  });

  describe('The "toggleMenu" property', () => {
    const preventDefault = jest.fn();
    const toggleMenu = jest.fn();
    let renderedComponent = null;

    beforeEach(() => {
      renderedComponent = shallow(
        <Button
          bigScreenBreakpoint={1000}
          toggleMenu={toggleMenu}
        />
      );
    });

    afterEach(() => {
      preventDefault.mockClear();
      toggleMenu.mockClear();
    });

    it('should get called on a click event', () => {
      renderedComponent.simulate('click');
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Enter" key is pressed', () => {
      const KEY_CODE = 13;
      renderedComponent.simulate('KeyDown', { preventDefault, keyCode: KEY_CODE });
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Space" key is pressed', () => {
      const KEY_CODE = 32;
      renderedComponent.simulate('KeyDown', { preventDefault, keyCode: KEY_CODE });
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Arrow Down" key is pressed', () => {
      const KEY_CODE = 40;
      renderedComponent.simulate('KeyDown', { preventDefault, keyCode: KEY_CODE });
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should NOT get called when any other key is pressed', () => {
      const KEY_CODE = 0;
      renderedComponent.simulate('KeyDown', { preventDefault, keyCode: KEY_CODE });
      expect(preventDefault).toHaveBeenCalledTimes(0);
      expect(toggleMenu).toHaveBeenCalledTimes(0);
    });
  });
});
