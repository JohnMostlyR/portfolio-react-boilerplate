import styled from 'styled-components';
import { rem } from 'polished';

import Bubble from './Bubble';

const Wrapper = styled.div`
  margin-bottom: 9vh;
  padding: 1vh 1vw;
  width: 100%;
  filter: drop-shadow(0 0 10px grey);
  transition: filter 0.2s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    filter: drop-shadow(0 0 5px dimgrey);
  }

  @media (min-width: 1008px) {
    max-width: ${rem('1008px')};
  }

  ${Bubble}

  p {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
`;

export default Wrapper;
