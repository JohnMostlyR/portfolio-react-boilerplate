import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

export function renderMediaBreakpoints({ breakpoints = [], imageDimensions = [] }) {
  if (breakpoints.length !== imageDimensions.length) {
    throw new Error(`Mismatch between the length of the breakpoints array, ${breakpoints.length} items, and the imageDimensions array, ${imageDimensions.length} items)`);
  }

  return breakpoints.map((_breakpoint, idx) => {
    const { media: { breakpoint, size } } = _breakpoint;
    const { height, width } = imageDimensions[idx];

    return `@media (${breakpoint}: ${size}) {
      height: ${height}px;
      width: ${width}px;
    };
    `;
  });
}

const ImageWrapper = styled.div`
  margin: ${BASE_LINE_HEIGHT * 3}rem 0;
  text-align: center;

  ${(props) => renderMediaBreakpoints(props)}
`;

ImageWrapper.propTypes = {
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.shape({
        breakpoint: PropTypes.string,
        size: PropTypes.string,
      }),
      srcSet: PropTypes.string,
    })
  ),
  imageDimensions: PropTypes.array,
};

export default ImageWrapper;
