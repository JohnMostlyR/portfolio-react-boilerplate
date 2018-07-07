/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  pageTitle: {
    id: 'portfolio.page.NotFoundPage.pageTitle',
    defaultMessage: 'NOT FOUND',
  },
  pageDescription: {
    id: 'portfolio.page.NotFoundPage.pageDescription',
    defaultMessage:
      'The page you requested does not exist or has been removed. Sorry about that',
  },
  title: {
    id: 'portfolio.page.NotFoundPage.title',
    defaultMessage:
      'Johan Meester : Portfolio : Front-End Developer : {pageTitle}',
  },
  content: {
    id: 'portfolio.page.NotFoundPage.content',
    defaultMessage: `I am sorry, but the page you requested does not exist or has been removed.
      Please go to the {home} page or, if you think this is an error, to the {contact} page and contact me.`,
  },
  home: {
    id: 'portfolio.page.NotFoundPage.home',
    defaultMessage: 'start',
  },
  contact: {
    id: 'portfolio.page.NotFoundPage.contact',
    defaultMessage: 'contact',
  },
});
