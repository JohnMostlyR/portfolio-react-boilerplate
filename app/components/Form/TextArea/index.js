/**
 *
 * TextArea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import InputGroup from '../InputGroup';
import StyledTextArea from './StyledTextArea';
import Label from '../Label';
import Placeholder from '../Placeholder';
import LabelContent from '../LabelContent';
import ErrorMessage from '../ErrorMessage';
import SubText from '../SubText';

/* eslint-disable no-underscore-dangle */
class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
    this.state = {
      _error: false,
      _hasFocus: false,
      _height: 0,
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
    if (this.inputElement) {
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
    const { clientHeight, scrollHeight } = this.inputElement;
    let { _height } = this.state;

    // Adjust height of textarea on multi-line input
    if (scrollHeight > clientHeight) {
      _height = scrollHeight;
    } else {
      _height = clientHeight;
    }

    this.setState({
      _error: error,
      _height,
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
      label,
      maxLength,
      minLength,
      name,
      placeholder,
    } = this.props;

    const { _error, _hasFocus, _height, _value } = this.state;

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
      } else if (!_error) {
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
        <StyledTextArea
          myHeight={_height}
          name={name}
          onBlur={this.handleBlurEvent}
          onChange={this.handleChangeEvent}
          onFocus={this.handleFocusEvent}
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

TextArea.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  validate: PropTypes.func,
  value: PropTypes.string,
};

export default TextArea;
