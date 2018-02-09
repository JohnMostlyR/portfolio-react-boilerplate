import styled from 'styled-components';

const ProjectsListItem = styled.li`
  margin-top: 2vh;
  position: relative;
  background-color: #f90;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px grey;
  transition: box-shadow 0.2s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    box-shadow: 0 0 5px dimgrey;

    @media (min-width: 900px) {
      box-shadow: none;
      filter: drop-shadow(0 0 1px dimgrey);
    }
  }

  @media (min-width: 900px) {
    box-shadow: none;
    filter: drop-shadow(0 0 5px grey);
    transition: filter 0.2s ease-in-out;
  }

  &:nth-child(odd) {
    background-color: #09f;
    color: #d0eb2a;

    @media (min-width: 900px) {
      margin-left: 14vw;
      border-bottom-right-radius: 0;

      &::after {
        content: "";
        height: 9vmin;
        left: 0;
        margin-top: -1px;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%2333ADFF' fill='%2333ADFF' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%230062A3' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%2333ADFF' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
        transform: rotateY(180deg);
      }
    }
  }

  &:nth-child(even) {
    @media (min-width: 900px) {
      margin-right: 14vw;
      border-bottom-left-radius: 0;

      &::after {
        content: "";
        height: 9vmin;
        left: 0;
        margin-top: -1px;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%23FFAD33' fill='%23FFAD33' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%23A36200' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%23FFAD33' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
      }
    }
  }
`;

export default ProjectsListItem;
