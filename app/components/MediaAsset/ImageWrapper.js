import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: ${({ imageDimensions: { height } = {} } = {}) =>
    height ? `${height}px` : 'auto'};
  width: ${({ imageDimensions: { width } = {} } = {}) =>
    width ? `${width}px` : '100%'};
  border-radius: 0.5rem;

  > img {
    border-radius: 0.5rem;
  }
`;

ImageWrapper.propTypes = {
  imageDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};

export default ImageWrapper;
