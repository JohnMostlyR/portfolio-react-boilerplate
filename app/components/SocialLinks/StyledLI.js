import styled from 'styled-components';

import typography from '../../styles/templates/typography';

const StyledLI = styled.li`
  padding: .5em;
  transition: transform .2s;

  &:hover {
    transform: scale(1.5);
  }

  ${typography.doublePica};
  
  @media (min-width: 37.5em) and (max-height: 31.25em) {
    ${typography.pica}
  }
`;

export default StyledLI;
