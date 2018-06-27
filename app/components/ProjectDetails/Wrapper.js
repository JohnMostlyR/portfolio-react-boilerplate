import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  opacity: ${({ animate }) => (animate ? 0 : 1)};
  animation-delay: 0ms;
  animation-direction: normal;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${({ animate }) => (animate ? fadeIn : 'none')};
  animation-timing-function: ease-in-out;

  @supports (display: grid) {
    display: grid;
    grid-area: mainContent;
    grid-template-areas:
      'pageHeader'
      'pageContent';
  }
`;

Wrapper.propTypes = {
  animate: PropTypes.bool,
};

Wrapper.defaultProps = {
  animate: true,
};

export default Wrapper;
