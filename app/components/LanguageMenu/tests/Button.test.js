import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../Button';

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Button />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "label" property', () => {
    const PROPERTY_VALUE = 'Test';
    const renderedComponent = shallow(<Button label={PROPERTY_VALUE} />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isExpanded" property', () => {
    const PROPERTY_VALUE = true;
    const renderedComponent = shallow(<Button isExpanded={PROPERTY_VALUE} />);

    expect(renderedComponent.prop('aria-expanded')).toBe(PROPERTY_VALUE);
  });

  it('should adopt the "buttonRef" property', () => {
    const PROPERTY_VALUE = jest.fn();
    mount(<Button buttonRef={PROPERTY_VALUE} />);

    expect(PROPERTY_VALUE).toHaveBeenCalledTimes(1);
  });

  describe('The "toggleMenuHandler" property', () => {
    it('should get called on a click event', () => {
      const PROPERTY_VALUE = jest.fn();
      const renderedComponent = shallow(<Button toggleMenuHandler={PROPERTY_VALUE} />);

      renderedComponent.simulate('click');
      expect(PROPERTY_VALUE).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Enter" key is pressed', () => {
      const PREVENT_DEFAULT = jest.fn();
      const PROPERTY_VALUE = jest.fn();
      const renderedComponent = shallow(<Button toggleMenuHandler={PROPERTY_VALUE} />);

      renderedComponent.simulate('KeyDown', { preventDefault: PREVENT_DEFAULT, keyCode: 13 });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(PROPERTY_VALUE).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Space" key is pressed', () => {
      const PREVENT_DEFAULT = jest.fn();
      const PROPERTY_VALUE = jest.fn();
      const renderedComponent = shallow(<Button toggleMenuHandler={PROPERTY_VALUE} />);

      renderedComponent.simulate('KeyDown', { preventDefault: PREVENT_DEFAULT, keyCode: 32 });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(PROPERTY_VALUE).toHaveBeenCalledTimes(1);
    });

    it('should get called when the "Arrow Down" key is pressed', () => {
      const PREVENT_DEFAULT = jest.fn();
      const PROPERTY_VALUE = jest.fn();
      const renderedComponent = shallow(<Button toggleMenuHandler={PROPERTY_VALUE} />);

      renderedComponent.simulate('KeyDown', { preventDefault: PREVENT_DEFAULT, keyCode: 40 });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(PROPERTY_VALUE).toHaveBeenCalledTimes(1);
    });

    it('should NOT get called when any other key is pressed', () => {
      const PREVENT_DEFAULT = jest.fn();
      const PROPERTY_VALUE = jest.fn();
      const renderedComponent = shallow(<Button toggleMenuHandler={PROPERTY_VALUE} />);

      renderedComponent.simulate('KeyDown', { preventDefault: PREVENT_DEFAULT, keyCode: 0 });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(0);
      expect(PROPERTY_VALUE).toHaveBeenCalledTimes(0);
    });
  });
});
