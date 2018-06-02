import styled from 'styled-components';

const SpeechBubble = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  filter: drop-shadow(0 0 10px grey);
  justify-content: center;
  max-width: 84vmin;
  padding: 10px 10px 10px 0; /* Keep room for shadow */
`;

export default SpeechBubble;
