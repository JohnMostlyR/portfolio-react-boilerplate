import styled from 'styled-components';

import mq from '../../styles/templates/mediaQueries';

const Description = styled.span`
  ${mq.m`margin-left: .5rem;`};

  @media all and (orientation: landscape) and (min-width: 37.5em) {
    display: none;
  }

  @media all and (orientation: landscape) and (min-height: 725px) {
    display: inline;
  }
`;

export default Description;
