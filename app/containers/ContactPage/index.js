/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import { Helmet } from 'react-helmet';

import {
  makeSelectSendStatus,
  makeSelectField,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { sendForm } from './actions';
import Form from './Form';
import FormInfo from './FormInfo';
import FormInfoItemsList from './FormInfoItemsList';
import FormFooter from './FormFooter';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import StyledArticle from '../../components/StyledArticle';
import SpeechBubble from '../../components/SpeechBubble';
import PageHeader from '../../components/PageHeader';
import FormInfoItemsListItem from '../../components/FormInfoItemsListItem';
import FormInput from '../../components/FormInput';
import SendButton from '../../components/SendButton';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';

export function validateForm(field, fieldError) {
  const errMessages = Object
    .keys(fieldError)
    .filter((key) => fieldError[key]);

  if (!field.email) {
    return true;
  }

  if (!field.message) {
    return true;
  }

  if (!field.name) {
    return true;
  }

  if (!field.subject) {
    return true;
  }

  if (errMessages.length) {
    return true;
  }

  return false;
}

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
  }

  componentWillReceiveProps(update) {
    this.setState({
      field: update.field,
      fieldError: update.error,
    });
  }

  onInputChange = ({ name, value, error }) => {
    const field = this.state.field;
    const fieldError = this.state.fieldError;

    field[name] = value;
    fieldError[name] = error;

    this.setState({ field, fieldError });
  };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    if (validateForm(this.state.field, this.state.fieldError)) {
      return;
    }

    const field = this.state.field;
    this.props.onSubmit(field);
  };

  render() {
    const status = this.props.sendStatus;

    const renderSendButton = () => ({
      IDLE: <SendButton buttonState={'idle'} disabled={validateForm(this.state.field, this.state.fieldError)} />,
      SENDING: <SendButton buttonState={'sending'} disabled />,
      SUCCESS: <SendButton buttonState={'success'} disabled />,
      ERROR: <SendButton buttonState={'error'} disabled={validateForm(this.state.field, this.state.fieldError)} />,
    }[status]);

    return (
      <StyledArticle>
        <Helmet>
          <title>Contact pagina</title>
          <meta name="description" content="Contact pagina van Johan Meester zijn portfolio" />
        </Helmet>
        <FlexRow>
          <FlexColumn>
            <PageHeader isLeftHanded>
              <FormattedMessage {...messages.header} />
            </PageHeader>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <SpeechBubble>
              <Form onSubmit={this.onFormSubmit}>
                <div>
                  <div>
                    <FormInfo>
                      <FormInfoItemsList>
                        <FormInfoItemsListItem>
                          <FormattedMessage {...messages.requirementOne} />
                        </FormInfoItemsListItem>
                      </FormInfoItemsList>
                    </FormInfo>
                    <div>
                      <FormInput
                        helperText={this.props.intl.formatMessage(messages.subjectText)}
                        label={this.props.intl.formatMessage(messages.subjectLabel)}
                        maxLength={50}
                        minLength={3}
                        name="subject"
                        onChange={this.onInputChange}
                        validate={(val) => (isLength(val, { min: 3, max: 50 }))
                          ? false
                          : this.props.intl.formatMessage(messages.subjectError)}
                        value={this.state.field.subject}
                      />
                      <FormInput
                        helperText={this.props.intl.formatMessage(messages.yourMessageText)}
                        label={this.props.intl.formatMessage(messages.yourMessageLabel)}
                        maxLength={300}
                        minLength={5}
                        name="message"
                        onChange={this.onInputChange}
                        isTextArea
                        validate={(val) => (isLength(val, { min: 5, max: 300 }))
                          ? false
                          : this.props.intl.formatMessage(messages.yourMessageError)}
                        value={this.state.field.message}
                      />
                      <FormInput
                        helperText={this.props.intl.formatMessage(messages.nameText)}
                        label={this.props.intl.formatMessage(messages.nameLabel)}
                        maxLength={50}
                        minLength={2}
                        name="name"
                        placeholder={this.props.intl.formatMessage(messages.namePlaceholder)}
                        onChange={this.onInputChange}
                        validate={(val) => (isLength(val, { min: 2, max: 50 }))
                          ? false
                          : this.props.intl.formatMessage(messages.nameError)}
                        value={this.state.field.name}
                      />
                      <FormInput
                        helperText={this.props.intl.formatMessage(messages.emailText)}
                        inputType="email"
                        label={this.props.intl.formatMessage(messages.emailLabel)}
                        name="email"
                        placeholder={this.props.intl.formatMessage(messages.emailPlaceholder)}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val)) ? false : this.props.intl.formatMessage(
                          messages.emailError)}
                        value={this.state.field.email}
                      />
                    </div>
                    <FormFooter>
                      {
                        renderSendButton()
                      }
                    </FormFooter>
                  </div>
                </div>
              </Form>
            </SpeechBubble>
          </FlexColumn>
        </FlexRow>
      </StyledArticle>
    );
  }
}

ContactPage.propTypes = {
  error: PropTypes.object,
  field: PropTypes.object,
  intl: intlShape,
  onSubmit: PropTypes.func,
  sendStatus: PropTypes.oneOf(['IDLE', 'SENDING', 'SUCCESS', 'ERROR']),
};

const mapStateToProps = createStructuredSelector({
  sendStatus: makeSelectSendStatus(),
  field: makeSelectField(),
  error: makeSelectError(),
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
)(injectIntl(ContactPage));
