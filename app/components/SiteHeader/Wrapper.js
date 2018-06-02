import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 0.5vh solid ${({ borderColor }) => borderColor || 'unset'};
`;

Wrapper.propTypes = {
  borderColor: PropTypes.string,
};

export default Wrapper;
