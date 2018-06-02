import styled from 'styled-components';

const StyledLI = styled.li`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }

  @media (min-width: 1280px) {
    &:hover {
      transform: none;
    }
  }
`;

export default StyledLI;
