import styled from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 427.9 175.1 132.1',
  preserveAspectRatio: 'xMinYMid',
})`
  float: ${({ isLeftHanded }) => isLeftHanded ? 'left' : 'right'};
  height: 1px;
  margin-top: -1px;
  transform: rotateY(${({ isLeftHanded }) => isLeftHanded ? '0deg' : '180deg'});
  z-index: 9;

  &::after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }

  @media (min-height: ${({ showBreakpoint, height }) => showBreakpoint || height}) {
    height: ${({ height }) => height || '100%'};
  }
`;

Arrow.propTypes = {
  height: PropTypes.string,
  isLeftHanded: PropTypes.bool,
  showBreakpoint: PropTypes.string,
  width: PropTypes.string,
};

export default Arrow;
