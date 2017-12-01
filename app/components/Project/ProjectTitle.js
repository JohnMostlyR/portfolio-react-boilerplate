import styled from 'styled-components';
import typography from '../../styles/templates/typography';

const ProjectTitle = styled.h2`
  flex: 1;
  font-family: Consolas, Monaco, "Andale Mono", monospace !important;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  
  ${typography.doublePica}
`;

export default ProjectTitle;
