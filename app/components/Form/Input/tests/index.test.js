import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from '../index';
import StyledInput from '../StyledInput';

/* eslint no-underscore-dangle: "off" */
describe('<Input />', () => {
  const props = {
    helperText: 'This is a helper text',
    inputType: 'dummy',
    label: 'This is the label text',
    maxLength: 15,
    name: 'This is the input its name',
    minLength: 1,
    changeHandler: jest.fn(),
    placeholder: 'This is the placeholder text',
    validate: jest.fn(),
    value: 'The value',
  };

  it('should render with only the required properties and match the snapshot', () => {
    const wrapper = shallow(
      <Input
        name={props.name}
        label={props.label}
        changeHandler={props.changeHandler}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should receive all properties', () => {
    const wrapper = shallow(<Input {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have the correct initial state', () => {
    const wrapper = shallow(<Input {...props} />);

    expect(wrapper.state()._value).toBe(props.value);
    expect(wrapper.state()._error).toBe(false);
    expect(wrapper.state()._hasFocus).toBe(false);
  });

  it('should act when receiving focus', () => {
    const wrapper = shallow(<Input {...props} />);
    const input = wrapper.find(StyledInput);

    wrapper.setState({ _hasFocus: false });

    input.simulate('focus', { target: { value: true } });

    expect(wrapper.state()._hasFocus).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('when a user populates the input field', () => {
    const wrapper = shallow(<Input {...props} />);
    const input = wrapper.find(StyledInput);
    const value = 'testing123';

    wrapper.setState({
      _error: false,
      _hasFocus: true,
      _value: '',
    });

    beforeEach(() => {
      input.simulate('change', {
        target: {
          value,
        },
      });
      props.validate.mockReturnValueOnce('Error, Error, Error');
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
  });

  describe('when moving away', () => {
    const wrapper = shallow(<Input {...props} />);
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
