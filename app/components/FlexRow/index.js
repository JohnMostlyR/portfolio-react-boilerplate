import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'unset'};
  width: 100%; /* IE */
`;

FlexRow.propTypes = {
  fullHeight: PropTypes.bool,
};

export default FlexRow;
