import styled from 'styled-components';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const ChildrenWrapper = styled.div`
  height: 100%;
  width: 100%;

  @supports (display: grid) {
    display: grid;
    grid-area: content;
  }

  & * + * {
    margin-top: ${BASE_LINE_HEIGHT}rem;
  }

  & * + *:not(p) {
    margin: ${BASE_LINE_HEIGHT * 2}rem 0;
  }

  & * + h2,
  & * + h3 {
    /* em, not rem, now */
    margin-top: ${BASE_LINE_HEIGHT}em;
  }
`;

export default ChildrenWrapper;
