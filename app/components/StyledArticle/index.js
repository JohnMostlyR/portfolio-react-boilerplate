import styled from 'styled-components';
import { rem } from 'polished';
import mq from '../../styles/templates/mediaQueries';

const StyledArticle = styled.article`
  align-self: center;
  height: 100%;
  padding-right: 0;
  
  ${mq.m`
    padding-right: ${rem('114px')}
  `};
  
  @media (min-width: ${rem('1920px')}) {
    padding: 0 17vw;
  }
`;

export default StyledArticle;
