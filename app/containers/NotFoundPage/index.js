/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';
import PageContent from '../../components/PageContent';
import InlineLink from '../../components/InlineLink';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Niet gevonden</title>
          <meta name="description" content="Niet gevonden pagina van Johan Meester zijn portfolio" />
        </Helmet>
        <PageContent
          title={<FormattedMessage {...messages.title} />}
          content={
            <FormattedMessage
              {...messages.content}
              values={{
                home: (
                  <FormattedMessage {...messages.home}>
                    {
                      (message) => <InlineLink to={'/'}>{message}</InlineLink>
                    }
                  </FormattedMessage>
                ),
                contact: (
                  <FormattedMessage {...messages.contact}>
                    {
                      (message) => <InlineLink to={'/contact'}>{message}</InlineLink>
                    }
                  </FormattedMessage>
                ),
              }}
            />
          }
        />
      </React.Fragment>
    );
  }
}
