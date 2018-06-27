/**
 *
 * Link
 *
 */

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = styled(RouterLink)`
  display: inline-block;
  position: relative;
  color: ${({ color }) => color || 'inherit'};
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none !important;
  white-space: nowrap;
  z-index: 2;
`;

Link.propTypes = {
  color: PropTypes.string,
};

export default Link;
