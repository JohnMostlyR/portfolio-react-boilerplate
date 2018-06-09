import styled from 'styled-components';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const ContentWrapper = styled.div`
  margin-top: ${BASE_LINE_HEIGHT * 3}rem;

  @supports (display: grid) {
    grid-area: pageContent;
  }
`;

export default ContentWrapper;
