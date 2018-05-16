/*
 * ContentLoadingIndicator Messages
 *
 * This contains all the text for the ContentLoadingIndicator component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  error: {
    id: 'portfolio.component.ContentLoadingIndicator.error',
    defaultMessage: 'Terribly sorry, but the content cannot be loaded at this time',
  },
  timedOut: {
    id: 'portfolio.component.ContentLoadingIndicator.timedOut',
    defaultMessage: 'Loading is taking longer than expected',
  },
  pastDelay: {
    id: 'portfolio.component.ContentLoadingIndicator.pastDelay',
    defaultMessage: 'Loading content',
  },
});
