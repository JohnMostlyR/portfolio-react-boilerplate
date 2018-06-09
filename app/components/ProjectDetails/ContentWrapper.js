import styled from 'styled-components';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const ContentWrapper = styled.div`
  margin: ${BASE_LINE_HEIGHT * 3}rem 0;

  @supports (display: grid) {
    grid-area: pageContent;
  }
`;

export default ContentWrapper;
