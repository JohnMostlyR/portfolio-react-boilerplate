import styled from 'styled-components';

import mq from '../../styles/templates/mediaQueries';

const StyledLI = styled.li`
  vertical-align: middle;

  ${mq.m`margin-top: 2vw;`}

  &:not(:first-child) {
    ${mq.m`margin-left: 1vh;`}
  }
`;

export default StyledLI;
