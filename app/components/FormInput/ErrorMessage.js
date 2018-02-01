import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  display: none;
  color: red;
  font-size: 12px;
  ${(props) => props.showError ? 'display: inline; margin-right: 0.5em;' : ''}
`;

ErrorMessage.propTypes = {
  showError: PropTypes.bool,
};

export default ErrorMessage;
