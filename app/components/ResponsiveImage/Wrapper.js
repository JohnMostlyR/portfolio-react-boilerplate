import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * The responsive image pattern automatically reserves the space
 * needed for an image to be inserted
 *
 *
 * 1. Setting the height to zero collapses the div so we don't
 *    need to absolutely position the image
 * 2. Stop images 1px difference between the reserved space
 *    and the actual image from showing
 */
const Wrapper = styled.div`
  position: relative;
  height: 0; /* [1] */
  overflow: hidden; /* [2] */
  background-color: ${props =>
    props.noPlaceholder ? 'transparent' : '#f0f0f0'};

  /**
   * 1. Force the image to sit on top of the placeholder
   * 2. Force the image to fill the available space
   *
   * The exact combination of [1] and [2] is needed to stop the
   * image from being 1px too short, the root cause of which is
   * down to the browser's rendering of sub-pixels
   */
  img {
    position: absolute; /* [1] */
    height: 100%; /* [2] */
    width: 100%; /* [2] */
  }

  /**
   * Aspect radio modifiers
   */
  padding-bottom: ${props => {
    switch (props.ratio) {
      case '1by1':
        return '100%';
      case '4by3':
        return '75%';
      case '16by9':
        return '56.25%';
      default:
        return 0;
    }
  }};
`;

Wrapper.propTypes = {
  noPlaceholder: PropTypes.bool,
  ratio: PropTypes.oneOf(['1by1', '4by3', '16by9']),
};

Wrapper.defaultProps = {
  noPlaceholder: false,
};

export default Wrapper;
