import styled from 'styled-components';

import { svgToURL } from '../../styles/tools';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

const SVG = svgToURL(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.5 196.3" preserveAspectRatio="xMaxYMid">
    <path fill="#AEE8FC" d="M41.88 103.97h16.64L50.2 89.55l-8.32-14.41-8.33 14.41-8.32 14.42z"/>
    <path fill="#54D2FE" d="M11.44 56.67h11.44l-5.72-9.91-5.72-9.91-5.72 9.91L0 56.67z"/>
    <path fill="#C9F0C4" d="M42.98 49.07h8.91l-4.46-7.72-4.45-7.71-4.45 7.71-4.46 7.72z"/>
    <path fill="#D3EE32" d="M31.2 11.77h6.79l-3.4-5.88L31.2 0l-3.4 5.89-3.4 5.88z"/>
    <path fill="#5DD2F9" d="M47.83 153.64H59.5l-5.83-10.11-5.84-10.11L42 143.53l-5.84 10.11z"/>
    <path fill="#C8F1FD" d="M33.72 196.3h4.63l-2.32-4.02-2.31-4.01-2.32 4.01-2.32 4.02z"/>
  </svg>
`);

const StyledMain = styled.main.attrs({
  id: 'main',
})`
  & * + * {
    margin-top: ${BASE_LINE_HEIGHT}rem;
  }

  & * + h2,
  & * + h3 {
    /* em, not rem, now */
    margin-top: ${BASE_LINE_HEIGHT}em;
  }

  align-self: center;
  display: flex;
  flex: 1 0 auto;
  flex-flow: column nowrap;
  max-width: 1280px;
  overflow: hidden;
  padding: 0 ${BASE_LINE_HEIGHT}rem;
  width: 100%;

  @supports (display: grid) {
    align-self: unset;
    display: grid;
    grid-area: main;
    grid-template-areas: "mainContent";
    grid-template-rows: 1fr;
    justify-content: center;
    margin: 0;
    max-width: unset;
    background-attachment: fixed;
    background-image: ${() => `url(${SVG})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 50%;
  }
`;

export default StyledMain;
