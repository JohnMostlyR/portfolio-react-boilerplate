/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectSendStatus,
  makeSelectField,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { sendForm } from './actions';
import ContactForm from './ContactForm';
import validateForm from './ValidateForm';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import PageContent from '../../components/PageContent';
import HeadGear from '../../components/HeadGear';

export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      field: this.props.field || {
        subject: '',
        message: '',
        name: '',
        email: '',
      },
      fieldError: this.props.error || {},
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(update) {
    const { field, error } = update;

    this.setState({
      field,
      fieldError: error,
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    if (validateForm(this.state)) {
      return;
    }

    this.props.onSubmit(this.state.field);
  }

  handleChange({ name, value, error }) {
    const { field, fieldError } = this.state;

    field[name] = value;
    fieldError[name] = error;

    this.setState({
      field,
      fieldError,
    });
  }

  render() {
    const { sendStatus } = this.props;
    const { field, fieldError } = this.state;

    return (
      <React.Fragment>
        <HeadGear messages={messages} path={'/contact'} />
        <PageContent
          title={<FormattedMessage {...messages.pageTitle} />}
          content={
            <ContactForm
              field={field}
              fieldError={fieldError}
              changeHandler={this.handleChange}
              onSubmitHandler={this.handleFormSubmit}
              sendStatus={sendStatus}
            />
          }
        />
      </React.Fragment>
    );
  }
}

ContactPage.propTypes = {
  error: PropTypes.object,
  field: PropTypes.object,
  onSubmit: PropTypes.func,
  sendStatus: PropTypes.oneOf(['idle', 'sending', 'success', 'error']),
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  field: makeSelectField(),
  sendStatus: makeSelectSendStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (field) => dispatch(sendForm(field)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'contactPage', reducer });
const withSaga = injectSaga({ key: 'contactPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactPage);
