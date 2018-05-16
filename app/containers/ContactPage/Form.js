import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Form = styled.form`
  flex: 0 1 25rem;
  z-index: 1;
  background-color: ${theme.form.backgroundColor};
  border-radius: 0.5rem;
  color: ${theme.form.color};
  padding: 0.5rem;
`;

export default Form;
