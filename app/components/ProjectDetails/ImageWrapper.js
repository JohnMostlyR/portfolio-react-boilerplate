import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

export function renderMediaBreakpoints({
  breakpoints = [],
  imageDimensions = [],
}) {
  if (breakpoints.length !== imageDimensions.length) {
    throw new Error(
      `Mismatch between the length of the breakpoints array, ${
        breakpoints.length
      } items, and the imageDimensions array, ${imageDimensions.length} items)`,
    );
  }

  const sliceOfBreakpoints = breakpoints.slice(0, -1);
  const sliceOfImageDimensions = imageDimensions.slice(1);

  return sliceOfBreakpoints.map((_breakpoint, idx) => {
    const {
      media: { size },
    } = _breakpoint;
    const { height } = sliceOfImageDimensions[idx];

    return `@media (min-width: ${size + 1}px) {
      height: ${height}px;
    };
    `;
  });
}

function getDefaultHeight(imageDimensions = []) {
  if (imageDimensions.length === 0) {
    return 'auto';
  }

  const [{ height = 'auto' }] = imageDimensions;
  return height === 'auto' ? height : `${height}px`;
}

const ImageWrapper = styled.div`
  height: ${({ imageDimensions }) => getDefaultHeight(imageDimensions)};
  margin: ${BASE_LINE_HEIGHT * 3}rem 0;
  width: 100%;
  text-align: center;

  ${props => renderMediaBreakpoints(props)};
`;

ImageWrapper.propTypes = {
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.shape({
        breakpoint: PropTypes.string,
        size: PropTypes.number,
      }),
      srcSet: PropTypes.string,
    }),
  ),
  imageDimensions: PropTypes.array,
};

export default ImageWrapper;
