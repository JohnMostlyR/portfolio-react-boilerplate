import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import StyledA from './StyledA';
import VisuallyHiddenSpan from './VisuallyHiddenSpan';

const ExternalLink = (props) => (
  <StyledA href={props.href} target="_blank" rel="noopener noreferrer">
    <FontAwesome name={props.faIcon} /><VisuallyHiddenSpan>{props.description}</VisuallyHiddenSpan>
  </StyledA>
);

ExternalLink.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  faIcon: PropTypes.string,
};

ExternalLink.defaultProps = {
  faIcon: 'meh-o',
  description: 'ExternalLink to',
  href: '#',
};

export default ExternalLink;
