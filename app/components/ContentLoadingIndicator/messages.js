/*
 * ContentLoadingIndicator Messages
 *
 * This contains all the text for the ContentLoadingIndicator component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  error: {
    id: 'portfolio.containers.ContentLoadingIndicator.error',
    defaultMessage: 'Terribly sorry, but the page cannot be loaded at this time',
  },
  timedOut: {
    id: 'portfolio.containers.ContentLoadingIndicator.timedOut',
    defaultMessage: 'Loading is taking longer than expected',
  },
  pastDelay: {
    id: 'portfolio.containers.ContentLoadingIndicator.pastDelay',
    defaultMessage: 'Loading content',
  },
});
