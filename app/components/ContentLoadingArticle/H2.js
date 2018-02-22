import styled from 'styled-components';
import PropTypes from 'prop-types';

import { baseFontBold } from '../../styles/templates/typography';

const H2 = styled.h2`
  margin-bottom: 0.5em;
  color: ${({ isError }) => isError ? 'red' : '#95c11f'};
  overflow-wrap: break-word;
  font-size: 1rem;
  ${baseFontBold}
`;

H2.propTypes = {
  isError: PropTypes.bool,
};

export default H2;
