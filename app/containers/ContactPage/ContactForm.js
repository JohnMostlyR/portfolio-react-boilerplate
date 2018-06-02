import React from 'react';
import PropTypes from 'prop-types';
import isLength from 'validator/lib/isLength';
import isEmail from 'validator/lib/isEmail';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import messages from './messages';
import validateForm from './ValidateForm';

import Form,
{
  Footer,
  InfoList,
  InfoListItem,
  Input,
  SubmitButton,
  TextArea,
} from '../../components/Form';

function ContactForm({ fieldError, field, changeHandler, intl, onSubmitHandler, sendStatus }) {
  const { subject, message, name, email } = field;
  let formIsInvalid = validateForm({ field, fieldError });

  function handleKeyDown() {
    formIsInvalid = validateForm({ field, fieldError });
  }

  return (
    <Form onSubmit={onSubmitHandler} onChange={handleKeyDown}>
      <div>
        <div>
          <div>
            <InfoList>
              <InfoListItem>
                <FormattedMessage {...messages.requirementOne} />
              </InfoListItem>
            </InfoList>
          </div>
          <div>
            <Input
              helperText={intl.formatMessage(messages.subjectText)}
              label={intl.formatMessage(messages.subjectLabel)}
              maxLength={50}
              minLength={3}
              name="subject"
              changeHandler={changeHandler}
              validate={(val) => (isLength(val, { min: 3, max: 50 }))
                ? false
                : intl.formatMessage(messages.subjectError)}
              value={subject}
            />
            <TextArea
              helperText={intl.formatMessage(messages.yourMessageText)}
              label={intl.formatMessage(messages.yourMessageLabel)}
              maxLength={300}
              minLength={5}
              name="message"
              changeHandler={changeHandler}
              validate={(val) => (isLength(val, { min: 5, max: 300 }))
                ? false
                : intl.formatMessage(messages.yourMessageError)}
              value={message}
            />
            <Input
              helperText={intl.formatMessage(messages.nameText)}
              label={intl.formatMessage(messages.nameLabel)}
              maxLength={50}
              minLength={2}
              name="name"
              placeholder={intl.formatMessage(messages.namePlaceholder)}
              changeHandler={changeHandler}
              validate={(val) => (isLength(val, { min: 2, max: 50 }))
                ? false
                : intl.formatMessage(messages.nameError)}
              value={name}
            />
            <Input
              helperText={intl.formatMessage(messages.emailText)}
              inputType="email"
              label={intl.formatMessage(messages.emailLabel)}
              name="email"
              placeholder={intl.formatMessage(messages.emailPlaceholder)}
              changeHandler={changeHandler}
              validate={(val) => (isEmail(val))
                ? false
                : intl.formatMessage(messages.emailError)}
              value={email}
            />
          </div>
          <Footer>
            <SubmitButton buttonState={sendStatus} formIsValid={!formIsInvalid} />
          </Footer>
        </div>
      </div>
    </Form>
  );
}

ContactForm.propTypes = {
  field: PropTypes.object,
  fieldError: PropTypes.object,
  changeHandler: PropTypes.func.isRequired,
  intl: intlShape,
  onSubmitHandler: PropTypes.func.isRequired,
  sendStatus: PropTypes.oneOf(['idle', 'sending', 'success', 'error']),
};

export default injectIntl(ContactForm);
