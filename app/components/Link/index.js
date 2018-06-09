/**
*
* Link
*
*/

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { theme } from '../../styles/theme';

const { borderColor, color } = theme.link;
const { odd: oddBorderColor, even: evenBorderColor } = borderColor;
const { odd: oddColor, even: evenColor } = color;

const Link = styled(RouterLink)`
  display: inline-block;
  position: relative;
  border: 2px solid ${({ odd }) => odd === 'true' ? oddBorderColor : evenBorderColor};
  border-radius: 0.25rem;
  color: ${({ odd }) => odd === 'true' ? oddColor : evenColor};
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none !important;
  white-space: nowrap;
  z-index: 2;
`;

Link.propTypes = {
  odd: PropTypes.string,
};

export default Link;
