import styled from 'styled-components';
import { rem } from 'polished';

const IntroPageArticle = styled.article`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  @media (min-height: ${rem('424px')}) {
    align-items: center;
  }
`;

export default IntroPageArticle;
