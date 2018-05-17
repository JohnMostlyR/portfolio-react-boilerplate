import styled from 'styled-components';

import { BASE_LINE_HEIGHT } from '../../styles/typography';

const IntroHeader = styled.header`
  height: 100%;
  margin-left: -${BASE_LINE_HEIGHT}rem;
  z-index: 9;

  @supports (display: grid) {
    margin-left: 0;
    width: 100vmin;
  }
`;

export default IntroHeader;
