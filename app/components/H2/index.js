import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BASE_FONT_BOLD, MODULAR_SCALE_FACTOR } from '../../styles/typography';

const LINE_HEIGHT = 1.2;

const H2 = styled.h2`
  display: inline-block;
  margin: 0;
  padding: ${() => `${LINE_HEIGHT}em`};
  color: ${({ color }) => color || 'unset'};
  font-size: ${MODULAR_SCALE_FACTOR ** 3}rem;
  line-height: ${() => LINE_HEIGHT};
  ${BASE_FONT_BOLD};
`;

H2.propTypes = {
  color: PropTypes.string,
};

export default H2;
