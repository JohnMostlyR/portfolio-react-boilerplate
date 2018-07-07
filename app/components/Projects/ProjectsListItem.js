import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { theme } from '../../styles/theme';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const { backgroundColor, color } = theme.project;
const ARROW_ODD_PATH_ONE_COLOR = lighten(0.1, backgroundColor.odd).substring(1);
const ARROW_ODD_PATH_TWO_COLOR = darken(0.1, backgroundColor.odd).substring(1);
const ARROW_ODD_PATH_THREE_COLOR = lighten(0.1, backgroundColor.odd).substring(
  1,
);
const ARROW_EVEN_PATH_ONE_COLOR = lighten(0.1, backgroundColor.even).substring(
  1,
);
const ARROW_EVEN_PATH_TWO_COLOR = darken(0.1, backgroundColor.even).substring(
  1,
);
const ARROW_EVEN_PATH_THREE_COLOR = lighten(
  0.1,
  backgroundColor.even,
).substring(1);
const ARROW_ODD = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%23${ARROW_ODD_PATH_ONE_COLOR}' fill='%23${ARROW_ODD_PATH_ONE_COLOR}' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%23${ARROW_ODD_PATH_TWO_COLOR}' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%23${ARROW_ODD_PATH_THREE_COLOR}' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E`;
const ARROW_EVEN = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%23${ARROW_EVEN_PATH_ONE_COLOR}' fill='%23${ARROW_EVEN_PATH_ONE_COLOR}' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%23${ARROW_EVEN_PATH_TWO_COLOR}' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%23${ARROW_EVEN_PATH_THREE_COLOR}' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E`;

const ProjectsListItem = styled.li`
  margin: 0;
  padding: 0;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px grey;
  transition: box-shadow 0.2s ease-in-out;

  @media (min-width: 900px) {
    box-shadow: none;
    filter: drop-shadow(0 0 5px grey);
    transition: filter 0.2s ease-in-out;
  }

  &:not(:first-child) {
    margin-top: ${BASE_LINE_HEIGHT * 2}rem;
  }

  &:nth-child(odd) {
    background-color: ${backgroundColor.odd};
    color: ${color.odd};

    @media (min-width: 900px) {
      margin-left: 14vw;
      border-bottom-right-radius: 0;

      &::after {
        content: '';
        height: 9vmin;
        left: 0;
        margin-top: -1px;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1;
        background-image: ${() => `url("${ARROW_ODD}")`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
        transform: rotateY(180deg);
      }
    }
  }

  &:nth-child(even) {
    background-color: ${backgroundColor.even};
    color: ${color.even};

    @media (min-width: 900px) {
      margin-right: 14vw;
      border-bottom-left-radius: 0;

      &::after {
        content: '';
        height: 9vmin;
        left: 0;
        margin-top: -1px;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1;
        background-image: ${() => `url("${ARROW_EVEN}")`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
      }
    }
  }
`;

export default ProjectsListItem;
