import styled from 'styled-components';
import { theme } from './theme';

export Input from './Input';
export TextArea from './TextArea';
export InfoList from './InfoList';
export InfoListItem from './InfoListItem';
export Footer from './Footer';
export SubmitButton from './SubmitButton';

const Form = styled.form`
  flex: 0 1 25rem;
  z-index: 1;
  background-color: ${theme.backgroundColor};
  border-radius: 0.5rem;
  color: ${theme.color};
  padding: 0.5rem;
`;

export default Form;
