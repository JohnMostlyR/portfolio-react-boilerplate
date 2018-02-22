/**
 *
 * ContentLoadingIndicator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import ContentLoadingArticle from '../ContentLoadingArticle/index';

export class ContentLoadingIndicator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { showError, show } = this.props;
    let renderThis = <React.Fragment />;

    if (showError) {
      renderThis = <FormattedMessage {...messages.error} />;
    } else {
      renderThis = <FormattedMessage {...messages.pastDelay} />;
    }

    return (
      <ContentLoadingArticle
        showError={showError}
        show={show}
      >
        {renderThis}
      </ContentLoadingArticle>
    );
  }
}

ContentLoadingIndicator.propTypes = {
  show: PropTypes.bool,
  showError: PropTypes.bool,
};

export default ContentLoadingIndicator;
