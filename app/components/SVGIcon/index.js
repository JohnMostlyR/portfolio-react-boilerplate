import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ROTATE_360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SVGIcon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: ({ viewBox }) => viewBox || '0 0 512 512',
  focusable: 'false',
  'aria-hidden': 'true',
})`
  display: inline-block;
  height: ${({ height }) => height || '1em'};
  margin: 0;
  position: relative;
  width: ${({ width }) => width || '1em'};
  animation: ${({ animate }) => {
    switch (animate) {
      case 'rotate':
        return `${ROTATE_360} 2s linear infinite`;
      default:
        return 'none';
    }
  }};
  fill: ${({ color }) => color || 'currentColor'};
  vertical-align: middle;
`;

SVGIcon.propTypes = {
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  animate: PropTypes.oneOf(['rotate']),
  color: PropTypes.string,
};

export default SVGIcon;
