import styled from 'styled-components';

import { BASE_LINE_HEIGHT } from '../../styles/typography';

const StyledHeader = styled.header`
  display: inline-block;
  margin-top: ${BASE_LINE_HEIGHT * 3}rem;

  @supports (display: grid) {
    align-self: end;
    grid-area: pageHeader;
  }
`;

export default StyledHeader;
