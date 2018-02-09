import styled from 'styled-components';

const StyledLI = styled.li`
  font-size: 0.7rem;
  vertical-align: middle;

  @media (min-width: 600px) {
    margin-top: 2vw;
    font-size: 1rem;
  }

  &:not(:first-child) {
    @media (min-width: 600px) {
      margin-left: 1vh;
    }
  }
`;

export default StyledLI;
