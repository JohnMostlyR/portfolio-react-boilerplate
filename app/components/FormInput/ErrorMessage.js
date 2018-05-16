import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ErrorMessage = styled.span`
  display: ${(props) => props.showError ? 'inline' : 'none'};
  color: ${theme.form.errorMessageColor};
`;

ErrorMessage.propTypes = {
  showError: PropTypes.bool,
};

export default ErrorMessage;
