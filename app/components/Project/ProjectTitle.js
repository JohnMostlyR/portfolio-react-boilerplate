import styled from 'styled-components';

import { baseFontBold } from '../../styles/templates/typography';

const ProjectTitle = styled.h2`
  flex: 1;
  font-size: 1rem;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  ${baseFontBold}
`;

export default ProjectTitle;
