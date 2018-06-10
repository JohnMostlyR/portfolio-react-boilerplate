import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const P = styled.p`
  line-height: ${BASE_LINE_HEIGHT};
  margin: ${BASE_LINE_HEIGHT}em 0;
  max-width: 30em;
  text-align: ${({ textAlign }) => textAlign};
  word-break: break-word;
`;

P.propTypes = {
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

P.defaultProps = {
  textAlign: 'left',
};

export default P;
