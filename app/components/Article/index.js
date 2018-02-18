import React from 'react';
import PropTypes from 'prop-types';

import StyledArticle from './StyledArticle';

function Article({ loadingContent, ...props }) {
  return (
    <StyledArticle {...props} loadingContent={loadingContent} />
  );
}

Article.propTypes = {
  loadingContent: PropTypes.bool,
};

Article.defaultProps = {
  loadingContent: false,
};

export default Article;
