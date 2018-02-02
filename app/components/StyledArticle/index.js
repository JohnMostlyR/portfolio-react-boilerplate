import styled from 'styled-components';
import { rem } from 'polished';

const StyledArticle = styled.article`
  align-self: center;
  padding-right: 0;
  width: 100%;

  @media (min-width: 600px) {
    padding-right: ${rem('114px')};
  }

  @media (min-width: 1920px) {
    padding: 0 17vw;
  }
`;

export default StyledArticle;
