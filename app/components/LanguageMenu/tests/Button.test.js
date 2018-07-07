import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {
  const toggleMenuHandler = jest.fn();
  const buttonRef = jest.fn();

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <Button toggleMenuHandler={toggleMenuHandler} buttonRef={buttonRef} />,
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "label" property', () => {
    const PROPERTY_VALUE = 'Test';
    const renderedComponent = shallow(
      <Button
        toggleMenuHandler={toggleMenuHandler}
        buttonRef={buttonRef}
        label={PROPERTY_VALUE}
      />,
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "isExpanded" property', () => {
    const PROPERTY_VALUE = true;
    const renderedComponent = shallow(
      <Button
        toggleMenuHandler={toggleMenuHandler}
        buttonRef={buttonRef}
        isExpanded={PROPERTY_VALUE}
      />,
    );

    expect(renderedComponent.prop('aria-expanded')).toBe(PROPERTY_VALUE);
  });

  it('should adopt the "buttonRef" property', () => {
    mount(
      <Button toggleMenuHandler={toggleMenuHandler} buttonRef={buttonRef} />,
    );

    expect(buttonRef).toHaveBeenCalledTimes(1);
  });

  describe('The "toggleMenuHandler" property', () => {
    const PREVENT_DEFAULT = jest.fn();
    const STOP_PROPAGATION = jest.fn();
    const renderedComponent = shallow(
      <Button toggleMenuHandler={toggleMenuHandler} buttonRef={buttonRef} />,
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should get called on a click event', () => {
      renderedComponent.simulate('click', {
        preventDefault: PREVENT_DEFAULT,
        stopPropagation: STOP_PROPAGATION,
      });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(STOP_PROPAGATION).toHaveBeenCalledTimes(1);
      expect(toggleMenuHandler).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Enter" key is pressed', () => {
      renderedComponent.simulate('keyDown', {
        preventDefault: PREVENT_DEFAULT,
        keyCode: 13,
      });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(toggleMenuHandler).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Space" key is pressed', () => {
      renderedComponent.simulate('keyDown', {
        preventDefault: PREVENT_DEFAULT,
        keyCode: 32,
      });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(toggleMenuHandler).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Arrow Down" key is pressed', () => {
      renderedComponent.simulate('keyDown', {
        preventDefault: PREVENT_DEFAULT,
        keyCode: 40,
      });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(toggleMenuHandler).toHaveBeenCalledTimes(1);
    });

    it('should NOT get called when any other key is pressed', () => {
      renderedComponent.simulate('keyDown', {
        preventDefault: PREVENT_DEFAULT,
        keyCode: 0,
      });
      expect(PREVENT_DEFAULT).not.toHaveBeenCalled();
      expect(toggleMenuHandler).not.toHaveBeenCalled();
    });
  });
});
