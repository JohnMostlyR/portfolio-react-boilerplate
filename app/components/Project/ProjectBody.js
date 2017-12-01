import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

const ProjectBody = styled.div`
  flex: 1 0 50%;
  order: 2;
  padding-bottom: 2vw;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-top: 3vw;
  
  ${mq.m`
    order: 1;
    padding-bottom: 1vw;
    padding-left: 3vw;
    padding-top: 1vw;
  `}
`;

export default ProjectBody;
