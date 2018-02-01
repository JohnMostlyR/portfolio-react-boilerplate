import styled from 'styled-components';

const ProjectBody = styled.div`
  flex: 1 0 50%;
  order: 2;
  padding-bottom: 2vw;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-top: 3vw;

  @media (min-width: 600px) {
    order: 1;
    padding-bottom: 1vw;
    padding-left: 3vw;
    padding-top: 1vw;
  }
`;

export default ProjectBody;
