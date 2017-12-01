import styled from 'styled-components';

import mq from '../../styles/templates/mediaQueries';

const ProjectsListItem = styled.li`
  margin-top: 2vh;
  position: relative;
  background-color: #F90;
  border-radius: .5rem;

  &:nth-child(odd) {
    background-color: #09F;
    color: #D0EB2A;

    ${mq.l`
      margin-left: 14vw;
      border-bottom-right-radius: 0;
    
      &:after {
        content: "";
        height: 9vmin;
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%2333ADFF' fill='%2333ADFF' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%230062A3' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%2333ADFF' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
        transform: rotateY(180deg);
      }
    `}
  }

  &:nth-child(even) {
    ${mq.l`
      margin-right: 14vw;
      border-bottom-left-radius: 0;

      &:after {
        content: "";
        height: 9vmin;
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%23FFAD33' fill='%23FFAD33' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%23A36200' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%23FFAD33' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
      }
    `}
  }
`;

export default ProjectsListItem;
