import styled from 'styled-components';

const StyledLI = styled.li`
  padding: 0.5em;
  transition: transform 0.2s;
  font-size: 16px;

  &:hover {
    transform: scale(1.5);
  }

  @media (min-width: 37.5em) and (max-height: 31.25em) {
    /**/
  }
`;

export default StyledLI;
