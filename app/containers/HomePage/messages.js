/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'portfolio.page.index.title',
    defaultMessage: 'Johan Meester : Portfolio : Front-End Developer : {pageTitle}',
  },
  pageTitle: {
    id: 'portfolio.page.index.pageTitle',
    defaultMessage: 'INTRODUCTION',
  },
  metaDescription: {
    id: 'portfolio.page.index.meta.description',
    defaultMessage: 'Welcome on the portfolio of Johan Meester, Front-End Developer',
  },
  greeting: {
    id: 'portfolio.page.index.header.greeting',
    defaultMessage: 'WELCOME',
  },
  intro: {
    id: 'portfolio.page.index.header.intro',
    defaultMessage: 'I am {name}',
  },
  trade: {
    id: 'portfolio.page.index.header.trade',
    defaultMessage: 'FRONT-END DEVELOPER',
  },
  look: {
    id: 'portfolio.page.index.header.look',
    defaultMessage: 'HAVE A LOOK AROUND',
  },
  callToAction: {
    id: 'portfolio.page.index.header.callToAction',
    defaultMessage: 'CONTACT ME',
  },
});
