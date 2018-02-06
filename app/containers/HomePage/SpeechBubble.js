import styled from 'styled-components';
import { rem } from 'polished';

const SpeechBubble = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  filter: drop-shadow(0 0 10px grey);
  justify-content: center;
  padding: 10px 10px 10px 0; /* Keep room for shadow */

  @media (min-width: 600px) {
    padding-right: ${rem('114px')}; /* Keep room for site navigation */
  }
`;

export default SpeechBubble;
