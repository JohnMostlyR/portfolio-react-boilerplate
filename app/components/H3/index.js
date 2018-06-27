import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BASE_FONT_BOLD, MODULAR_SCALE_FACTOR } from '../../styles/typography';

const H3 = styled.h3`
  margin: 0;
  color: ${({ color }) => color || 'inherit'};
  font-size: ${MODULAR_SCALE_FACTOR ** 2}rem;
  line-height: 1.2;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  ${BASE_FONT_BOLD};
`;

H3.propTypes = {
  color: PropTypes.string,
};

export default H3;
