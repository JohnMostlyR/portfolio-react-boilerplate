import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexColumn = styled.div`
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'unset'};
  padding: ${({ fluid }) => fluid ? 0 : '0.25rem'};
`;

FlexColumn.propTypes = {
  fullHeight: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default FlexColumn;
