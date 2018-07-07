import styled from 'styled-components';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const Description = styled.div`
  margin: ${BASE_LINE_HEIGHT}em 0;
  max-width: 51em;
  line-height: ${BASE_LINE_HEIGHT};
  word-break: break-word;

  @media (min-width: 950px) {
    line-height: ${BASE_LINE_HEIGHT * 1.1};
  }
`;

export default Description;
