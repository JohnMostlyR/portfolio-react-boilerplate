import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TextArea from '../index';
import StyledInput from '../StyledTextArea';

/* eslint no-underscore-dangle: "off" */
describe('<TextArea />', () => {
  const props = {
    helperText: 'This is a helper text',
    inputType: 'dummy',
    label: 'This is the label text',
    maxLength: 300,
    name: 'This is the input its name',
    minLength: 1,
    changeHandler: jest.fn(),
    placeholder: 'This is the placeholder text',
    validate: jest.fn(),
    value: 'The value',
  };

  it('should render with only the required properties and match the snapshot', () => {
    const wrapper = shallow(
      <TextArea
        name={props.name}
        label={props.label}
        changeHandler={props.changeHandler}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should receive all properties', () => {
    const wrapper = shallow(<TextArea {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have the correct initial state', () => {
    const wrapper = shallow(<TextArea {...props} />);

    expect(wrapper.state()._error).toBe(false);
    expect(wrapper.state()._hasFocus).toBe(false);
    expect(wrapper.state()._height).toBe(0);
    expect(wrapper.state()._value).toBe(props.value);
  });

  it('should act when receiving focus', () => {
    const wrapper = shallow(<TextArea {...props} />);
    const input = wrapper.find(StyledInput);

    wrapper.setState({ _hasFocus: false });

    input.simulate('focus', { target: { value: true } });

    expect(wrapper.state()._hasFocus).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('when a user populates the field', () => {
    props.validate.mockReturnValue('Error, Error, Error');

    const wrapper = shallow(<TextArea {...props} />);
    const input = wrapper.find(StyledInput);
    const value = 'testing123\ntesting\ntesting\n123';

    beforeEach(() => {
      wrapper.setState({
        _error: false,
        _hasFocus: true,
        _height: 0,
        _value: '',
      });

      input.simulate('change', {
        target: {
          value,
        },
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should store the user input in the state property `_value`', () => {
      expect(wrapper.state()._value).toBe(value);
    });

    it('should update the helper text, when available', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should validate the user input', () => {
      expect(props.validate).toHaveBeenCalledTimes(1);
      expect(props.validate).toHaveBeenCalledWith(value);
    });

    it('should not show any errors as long as the field has the focus', () => {
      wrapper.setState({ _error: 'Error message.' });

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call the `props.changeHandler` function', () => {
      expect(props.changeHandler).toHaveBeenCalledTimes(1);
      expect(props.changeHandler).toHaveBeenCalledWith({
        name: props.name,
        value,
        error: 'Error, Error, Error',
      });
    });

    it('should adjust the height when needed', () => {
      wrapper.setState({ _height: 32 });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('when moving away', () => {
    const wrapper = shallow(<TextArea {...props} />);
    const input = wrapper.find(StyledInput);

    beforeEach(() => {
      wrapper.setState({
        _error: false,
        _hasFocus: true,
        _value: '',
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should update state', () => {
      input.simulate('blur', {
        target: {
          value: true,
        },
      });

      expect(wrapper.state()._hasFocus).toBe(false);
    });

    it('should show an error message when the input is not correct', () => {
      wrapper.setState({
        _error: 'Error, Error, Error',
      });

      input.simulate('blur', {
        target: {
          value: '',
        },
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
