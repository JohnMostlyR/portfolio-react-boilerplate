import styled from 'styled-components';

import { BASE_FONT_BOLD } from '../../styles/typography';

const ProjectTitle = styled.h3`
  flex: 1;
  margin: 2em 0 0.75em;
  font-size: calc(24px + 0.25vw);
  hyphens: auto;
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  ${BASE_FONT_BOLD}
`;

export default ProjectTitle;
