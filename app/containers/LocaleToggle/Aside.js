import styled from 'styled-components';

const Aside = styled.aside`
  box-shadow: 0 0 10px grey;
  opacity: 0.9;
  transition:
    box-shadow 0.3s 0s ease-in-out,
    opacity 0.3s 0s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 5px lightgrey;
    opacity: 1;
  }
`;

export default Aside;
