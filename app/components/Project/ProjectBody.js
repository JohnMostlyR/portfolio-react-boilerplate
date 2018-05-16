import styled from 'styled-components';

import { BASE_LINE_HEIGHT } from '../../styles/typography';

const ProjectBody = styled.div`
  flex: 1 0 50%;
  padding: 0 ${BASE_LINE_HEIGHT}rem;
  order: 2;

  @media (min-width: 660px) {
    order: 1;
  }
`;

export default ProjectBody;
