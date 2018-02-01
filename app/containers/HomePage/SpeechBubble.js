import styled from 'styled-components';
import { rem } from 'polished';

const SpeechBubble = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  @media (min-width: 600px) {
    padding-right: ${rem('114px')}; /* Keep room for site navigation */
  }
`;

export default SpeechBubble;
