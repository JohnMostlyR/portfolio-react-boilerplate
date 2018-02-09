import styled from 'styled-components';

const Description = styled.span`
  @media (min-width: 600px) {
    margin-left: 0.5rem;
  }

  @media all and (orientation: landscape) and (min-width: 37.5em) {
    display: none;
  }

  @media all and (orientation: landscape) and (min-height: 725px) {
    display: inline;
  }
`;

export default Description;
