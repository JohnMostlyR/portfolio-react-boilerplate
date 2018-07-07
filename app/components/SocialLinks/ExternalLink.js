import React from 'react';
import PropTypes from 'prop-types';

import StyledA from './StyledA';
import Description from './Description';

import IconCodepen from '../../components/IconCodepen';
import IconFreeCodeCamp from '../../components/IconFreeCodeCamp';
import IconGithub from '../../components/IconGithub';
import IconLinkedin from '../../components/IconLinkedin';
import IconExternalLink from '../../components/IconExternalLink';

export const VALID_ICONS = [
  'free-code-camp',
  'github',
  'linkedin',
  'linkedin-square',
  'codepen',
];

function ExternalLink({ color, description, href, faIcon }) {
  let renderThis = <span />;

  switch (faIcon) {
    case 'free-code-camp':
      renderThis = <IconFreeCodeCamp />;
      break;
    case 'github':
      renderThis = <IconGithub />;
      break;
    case 'linkedin':
    case 'linkedin-square':
      renderThis = <IconLinkedin />;
      break;
    case 'codepen':
      renderThis = <IconCodepen />;
      break;
    default:
      renderThis = <IconExternalLink />;
  }

  return (
    <StyledA
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      {renderThis}
      <Description>{description}</Description>
    </StyledA>
  );
}

ExternalLink.propTypes = {
  color: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  faIcon: PropTypes.oneOf(VALID_ICONS),
};

ExternalLink.defaultProps = {
  color: 'inherit',
  description: 'ExternalLink to',
  href: '#',
};

export default ExternalLink;
