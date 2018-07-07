import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../theme';

const ErrorMessage = styled.span`
  display: ${props => (props.showError ? 'inline' : 'none')};
  color: ${theme.errorMessageColor};
`;

ErrorMessage.propTypes = {
  showError: PropTypes.bool,
};

export default ErrorMessage;
