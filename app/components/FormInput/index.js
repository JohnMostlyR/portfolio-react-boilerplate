/* eslint no-return-assign: "off" */
/* eslint no-underscore-dangle: "off" */

/**
 *
 * FormInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import InputGroup from './InputGroup';
import Input from './Input';
import Textarea from './Textarea';
import Label from './Label';
import Placeholder from './Placeholder';
import LabelContent from './LabelContent';
import ErrorMessage from './ErrorMessage';
import HelperText from './HelperText';

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      error: false,
      _hasFocus: false,
      _height: '',
    };
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  onChange = (ev) => {
    const value = ev.target.value;
    let _height = '';

    if (this.textAreaElement) {
      if (this.textAreaElement.scrollHeight > this.textAreaElement.clientHeight) {
        _height = this.textAreaElement.scrollHeight;
      } else {
        _height = this.textAreaElement.clientHeight;
      }
    }

    this.setState({ value, _height });
  };

  onBlur = (ev) => {
    const name = this.props.name;
    const value = ev.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    const _hasFocus = false;

    this.setState({ value, error, _hasFocus });

    this.props.onChange({ name, value, error });
  };

  onFocus = () => {
    this.setState({ _hasFocus: true });
  };

  setFocus = () => {
    if (this.inputElement) {
      this.inputElement.focus();
    } else if (this.textAreaElement) {
      this.textAreaElement.focus();
    }
  };

  render() {
    const renderInput = () => (
      <Input
        type={this.props.inputType}
        name={this.props.name}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        value={this.state.value}
        innerRef={(el) => this.inputElement = el}
      />
    );

    const renderTextArea = () => (
      <Textarea
        style={{ height: this.state._height }}
        name={this.props.name}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        value={this.state.value}
        innerRef={(el) => this.textAreaElement = el}
      />
    );

    const renderHelperText = () => {
      if (!this.props.helperText) return '';

      let helperTextRange = '';

      if (this.props.minLength || this.props.maxLength) {
        helperTextRange =
          (<FormattedMessage
            {...messages.range}
            values={{
              minLength: this.props.minLength,
              maxLength: this.props.maxLength,
              count: this.state.value.length,
            }}
          />);
      }

      if (this.state._hasFocus || this.state.error || !this.state.value) {
        return (<span>{this.props.helperText}&nbsp;{helperTextRange}</span>);
      } else if (!this.state.error) {
        return (
          <FormattedMessage {...messages.valid} />
        );
      }

      return '';
    };

    const hasFocusOrValue = (this.state._hasFocus || !!this.state.value);

    return (
      <InputGroup>
        <Label
          htmlFor="name"
          onClick={this.setFocus}
        >
          <LabelContent
            hasFocus={hasFocusOrValue}
          >{this.props.label}<Placeholder
            hasFocus={hasFocusOrValue}
          ><i>{this.props.placeholder}</i></Placeholder></LabelContent>
        </Label>
        {(this.props.isTextArea) ? renderTextArea() : renderInput()}
        <div>
          <ErrorMessage
            showError={!!(!this.state._hasFocus &&
              this.state.error)}
          >{`${this.state.error} `}</ErrorMessage>
          <HelperText>{renderHelperText()}</HelperText>
        </div>
      </InputGroup>
    );
  }
}

FormInput.propTypes = {
  helperText: PropTypes.string,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isTextArea: PropTypes.bool,
  validate: PropTypes.func,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  inputType: 'text',
  isTextArea: false,
};

export default FormInput;
