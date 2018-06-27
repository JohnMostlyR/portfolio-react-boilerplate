/*
 * App Messages
 *
 * This contains all the text for the App component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'portfolio.title',
    defaultMessage: 'Johan Meester : Portfolio : Front-End Developer',
  },
  skipLink: {
    id: 'portfolio.skiplink',
    defaultMessage: 'skip to main content',
  },
  metaDescription: {
    id: 'portfolio.meta.description',
    defaultMessage: 'This is the portfolio website of Johan Meester. An Amsterdam based Front-End' +
      ' Developer specialized in React JS',
  },
  metaSiteName: {
    id: 'portfolio.meta.siteName',
    defaultMessage: 'Johan Meester : Portfolio',
  },
  noScript: {
    id: 'portfolio.noscript',
    defaultMessage: 'If you are seeing this message, that means that JavaScript has been disabled' +
      ' on your browser. Please enable JavaScript to make this app work.',
  },
});
