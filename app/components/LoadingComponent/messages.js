/*
 * LoadingComponent Messages
 *
 * This contains all the text for the LoadingComponent component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  error: {
    id: 'portfolio.components.LoadingComponent.error',
    defaultMessage: 'Terribly sorry, but the page cannot be loaded at this time',
  },
  timedOut: {
    id: 'portfolio.components.LoadingComponent.timedOut',
    defaultMessage: 'The page is taking longer to load than expected',
  },
  pastDelay: {
    id: 'portfolio.components.LoadingComponent.pastDelay',
    defaultMessage: 'The page is loading...',
  },
});
