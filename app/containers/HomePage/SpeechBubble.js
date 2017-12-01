import styled from 'styled-components';
import { rem } from 'polished';

import mq from '../../styles/templates/mediaQueries';

const SpeechBubble = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  
  ${mq.m`
    padding-right: ${rem('114px')}; // Keep room for site navigation
  `}
`;

export default SpeechBubble;
