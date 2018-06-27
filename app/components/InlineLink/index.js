import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { theme } from '../../styles/theme';

const { color, textShadowColor } = theme.inlineLink;

const InlineLink = styled(Link)`
  background-color: transparent;
  background-image: linear-gradient(currentColor, currentColor);
  background-origin: padding-box;
  background-position: center bottom 10%;
  background-repeat: no-repeat;
  background-size: 100% 1.5px;
  color: ${color};
  cursor: pointer;
  text-decoration: none;
  text-shadow: 3px 0 ${textShadowColor}, 2px 0 ${textShadowColor},
    1px 0 ${textShadowColor}, -1px 0 ${textShadowColor},
    -2px 0 ${textShadowColor}, -3px 0 ${textShadowColor};
  touch-action: manipulation;
  transition: color 0.1s ease-out;

  @supports (text-decoration-skip-ink: auto) {
    background: none;
    text-decoration: underline;
    text-decoration-skip-ink: auto; /* stylelint-disable-line property-no-unknown */
    text-shadow: none;
  }
`;

InlineLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default InlineLink;
