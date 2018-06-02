import styled from 'styled-components';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const P = styled.p`
  line-height: ${BASE_LINE_HEIGHT};
  margin: ${BASE_LINE_HEIGHT}em 0;
  max-width: 30em;
  word-break: break-word;
`;

export default P;
