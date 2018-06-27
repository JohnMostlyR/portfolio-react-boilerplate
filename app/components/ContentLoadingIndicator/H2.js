import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BASE_FONT_BOLD } from '../../styles/typography';
import { theme } from '../../styles/theme';

const { color } = theme.loader;

const H2 = styled.h2`
  color: ${({ isError }) => (isError ? 'white' : color)};
  overflow-wrap: break-word;
  font-size: 1rem;
  ${BASE_FONT_BOLD};
`;

H2.propTypes = {
  isError: PropTypes.bool,
};

export default H2;
