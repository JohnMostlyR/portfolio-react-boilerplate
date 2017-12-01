import styled from 'styled-components';

const Form = styled.form`
  flex: 0 1 25rem;
  z-index: 1;
  background-color: orange;
  border-radius: .5rem;
  color: #222;
  padding: .5rem;
  
  @media (min-width: 31em) {
    width: 31em;
  }
`;

export default Form;
