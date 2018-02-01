import styled from 'styled-components';
import { em } from 'polished';
import mq from '../../styles/templates/mediaQueries';

import Bubble from './Bubble';

const Wrapper = styled.div`
  margin-bottom: 9vh;
  padding: 1vh 1vw;
  width: 100%;

  ${mq.xl`max-width: ${em('1008px')};`}

  ${Bubble} p {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
`;

export default Wrapper;
