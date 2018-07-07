import PropTypes from 'prop-types';
import styled from 'styled-components';

const MediaWrapper = styled.div`
  display: flex;
  margin-bottom: ${props => props.spacing || 0};
`;

MediaWrapper.propTypes = {
  spacing: PropTypes.string,
};

MediaWrapper.defaultProps = {
  spacing: '0',
};

export default MediaWrapper;
