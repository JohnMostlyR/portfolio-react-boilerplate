import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import StyledA from './StyledA';

const ExternalLink = (props) => (
  <StyledA href={props.href} target="_blank" rel="noopener noreferrer">
    <FontAwesome name={props.faIcon} /><span hidden aria-hidden="false">{props.description}</span>
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
