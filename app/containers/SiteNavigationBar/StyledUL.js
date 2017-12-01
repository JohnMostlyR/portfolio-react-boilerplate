import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.m`justify-content: flex-start;`}
`;

export default StyledUL;
