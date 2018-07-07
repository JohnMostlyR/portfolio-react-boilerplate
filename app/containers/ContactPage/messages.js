/*
 * ContactPage Messages
 *
 * This contains all the text for the ContactPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'portfolio.containers.ContactPage.title',
    defaultMessage:
      'Johan Meester : Portfolio : Front-End Developer : {pageTitle}',
  },
  pageTitle: {
    id: 'portfolio.containers.ContactPage.pageTitle',
    defaultMessage: 'CONTACT ME',
  },
  metaDescription: {
    id: 'portfolio.containers.ContactPage.meta.description',
    defaultMessage:
      'For contacting me, please fill in this form. I will respond as soon as' +
      ' possible',
  },
  requirementOne: {
    id: 'portfolio.containers.ContactPage.requirementOne',
    defaultMessage: 'Please fill all fields',
  },
  subjectText: {
    id: 'portfolio.containers.ContactPage.subjectText',
    defaultMessage: 'Please provide a subject for your message.',
  },
  subjectLabel: {
    id: 'portfolio.containers.ContactPage.subjectLabel',
    defaultMessage: 'Subject',
  },
  subjectError: {
    id: 'portfolio.containers.ContactPage.subjectError',
    defaultMessage: 'A subject is required.',
  },
  yourMessageText: {
    id: 'portfolio.containers.ContactPage.yourMessageText',
    defaultMessage: 'Please add your message here.',
  },
  yourMessageLabel: {
    id: 'portfolio.containers.ContactPage.yourMessageLabel',
    defaultMessage: 'Your message',
  },
  yourMessageError: {
    id: 'portfolio.containers.ContactPage.yourMessageError',
    defaultMessage: 'A message is required.',
  },
  nameText: {
    id: 'portfolio.containers.ContactPage.nameText',
    defaultMessage: 'Please add your name here.',
  },
  nameLabel: {
    id: 'portfolio.containers.ContactPage.nameLabel',
    defaultMessage: 'Your name',
  },
  namePlaceholder: {
    id: 'portfolio.containers.ContactPage.namePlaceholder',
    defaultMessage: '(e.g. John Doo)',
  },
  nameError: {
    id: 'portfolio.containers.ContactPage.nameError',
    defaultMessage: 'Your name is required.',
  },
  emailText: {
    id: 'portfolio.containers.ContactPage.emailText',
    defaultMessage: 'Please add your email address here.',
  },
  emailLabel: {
    id: 'portfolio.containers.ContactPage.emailLabel',
    defaultMessage: 'Your email address',
  },
  emailPlaceholder: {
    id: 'portfolio.containers.ContactPage.emailPlaceholder',
    defaultMessage: '(e.g. my@email.com)',
  },
  emailError: {
    id: 'portfolio.containers.ContactPage.emailError',
    defaultMessage: 'Your email address is required.',
  },
});
