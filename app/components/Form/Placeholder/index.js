import PropTypes from 'prop-types';
import styled from 'styled-components';

const Placeholder = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  opacity: ${props => (props.hasFocus ? 1 : 0)};
  transition: 0.2s opacity 0.2s ease-in;
`;

Placeholder.propTypes = {
  hasFocus: PropTypes.bool,
};

export default Placeholder;
