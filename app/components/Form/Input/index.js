/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import InputGroup from '../InputGroup';
import StyledInput from './StyledInput';
import Label from '../Label';
import Placeholder from '../Placeholder';
import LabelContent from '../LabelContent';
import ErrorMessage from '../ErrorMessage';
import SubText from '../SubText';

/* eslint-disable no-underscore-dangle */
class Input extends React.Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
    this.state = {
      _error: false,
      _hasFocus: false,
      _value: this.props.value,
    };

    this.setFocus = this.setFocus.bind(this);
    this.handleFocusEvent = this.handleFocusEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  componentWillReceiveProps(update) {
    this.setState({ _value: update.value });
  }

  setFocus() {
    if (this.inputElement && 'focus' in this.inputElement) {
      this.inputElement.focus();
    }
  }

  handleFocusEvent() {
    this.setState({ _hasFocus: true });
  }

  handleBlurEvent() {
    const _hasFocus = false;

    this.setState({
      _hasFocus,
    });
  }

  handleChangeEvent(evt) {
    const { target } = evt;
    const { value } = target;
    const { name, validate } = this.props;
    const error = validate ? validate(value) : false;

    this.setState({
      _error: error,
      _value: value,
    });

    this.props.changeHandler({
      name,
      value,
      error,
    });
  }

  render() {
    const {
      helperText,
      inputType,
      label,
      maxLength,
      minLength,
      name,
      placeholder,
    } = this.props;

    const { _error, _hasFocus, _value } = this.state;

    const renderHelperText = () => {
      if (!helperText) return '';

      let helperTextRange = '';

      if (minLength || maxLength) {
        helperTextRange = (
          <FormattedMessage
            {...messages.range}
            values={{
              minLength,
              maxLength,
              count: _value.length,
            }}
          />
        );
      }

      if (_hasFocus || _error || !_value) {
        return (
          <span>
            {helperText}&nbsp;{helperTextRange}
          </span>
        );
      }
      if (!_error) {
        return <FormattedMessage {...messages.valid} />;
      }

      return '';
    };

    const hasFocusOrValue = _hasFocus || !!_value;

    return (
      <InputGroup>
        <Label htmlFor="name" onClick={this.setFocus}>
          <LabelContent hasFocus={hasFocusOrValue}>
            {label}
            <Placeholder hasFocus={hasFocusOrValue}>
              <i>{placeholder}</i>
            </Placeholder>
          </LabelContent>
        </Label>
        <StyledInput
          type={inputType}
          name={name}
          onChange={this.handleChangeEvent}
          onFocus={this.handleFocusEvent}
          onBlur={this.handleBlurEvent}
          value={_value}
          innerRef={el => {
            this.inputElement = el;
          }}
        />
        <SubText>
          <ErrorMessage
            showError={!!(!_hasFocus && _error)}
          >{`${_error} `}</ErrorMessage>
          <span>{renderHelperText()}</span>
        </SubText>
      </InputGroup>
    );
  }
}

Input.propTypes = {
  helperText: PropTypes.string,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  validate: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  inputType: 'text',
};

export default Input;
