import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  display: ${(props) => props.showError ? 'inline' : 'none'};
  color: red;
`;

ErrorMessage.propTypes = {
  showError: PropTypes.bool,
};

export default ErrorMessage;
