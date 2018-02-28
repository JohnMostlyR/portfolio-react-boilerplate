import styled from 'styled-components';
import { rem } from 'polished';

const StyledArticle = styled.article`
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;

  @media (min-width: 600px) {
    padding-left: 2vw;
    padding-right: ${rem('114px')};
  }

  @media (min-width: 1920px) {
    padding: 0 17vw;
  }
`;

export default StyledArticle;
