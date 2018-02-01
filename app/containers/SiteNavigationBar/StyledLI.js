import styled from 'styled-components';

import mq from '../../styles/templates/mediaQueries';

const StyledLI = styled.li`
  font-size: 0.7rem;
  vertical-align: middle;

  @media (min-width: 600px) {
    margin-top: 2vw;
    font-size: 1rem;
  }

  &:not(:first-child) {
    ${mq.m`margin-left: 1vh;`}
  }
`;

export default StyledLI;
