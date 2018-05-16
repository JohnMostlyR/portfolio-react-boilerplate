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

const Container = styled.div`
  display: inline-block;
  z-index: 10;
  filter: none;
  opacity: ${({ makeAppear }) => makeAppear ? 0 : 1};
  animation-delay: 0ms;
  animation-direction: normal;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${({ makeAppear }) => makeAppear ? fadeIn : 'none'};
  animation-timing-function: ease-in-out;

  @media (min-height: ${({ showArrowBreakpoint }) => showArrowBreakpoint || '100%'}) {
    filter: drop-shadow(0 0 5px grey);
  }

  @media (min-width: ${({ maxWidth }) => maxWidth || 'unset'}) {
    width: ${({ maxWidth }) => maxWidth || 'unset'};
  }
`;

Container.propTypes = {
  makeAppear: PropTypes.bool,
  maxWidth: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default Container;
