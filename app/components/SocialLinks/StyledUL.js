import styled from 'styled-components';

const StyledUL = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & li:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default StyledUL;
