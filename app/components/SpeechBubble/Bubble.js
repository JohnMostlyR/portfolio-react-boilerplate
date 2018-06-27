import styled from 'styled-components';
import PropTypes from 'prop-types';

/* eslint-disable indent */
const Bubble = styled.div`
  display: inline-block;
  margin: 0 !important;
  background-color: ${({ backgroundColor, isGhost }) =>
    isGhost ? 'transparent' : backgroundColor || 'transparent'};
  border: ${({ backgroundColor = 'inherit', isGhost }) =>
    isGhost ? `2px solid ${backgroundColor}` : 'none'};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px grey;
  color: ${({ color }) => color || 'inherit'};
  padding: ${({ padding }) => padding || 0};

  @media (min-height: ${({ showArrowBreakpoint }) =>
      showArrowBreakpoint || '100%'}) {
    margin-right: 0;
    border-bottom-left-radius: ${({ arrowPosition }) =>
      arrowPosition === 'bottom-left' ? 0 : '0.5rem'};
    border-bottom-right-radius: ${({ arrowPosition }) =>
      arrowPosition === 'bottom-right' ? 0 : '0.5rem'};
    border-top-left-radius: ${({ arrowPosition }) =>
      arrowPosition === 'top-left' ? 0 : '0.5rem'};
    border-top-right-radius: ${({ arrowPosition }) =>
      arrowPosition === 'top-right' ? 0 : '0.5rem'};
    box-shadow: none;
  }
`;

Bubble.propTypes = {
  arrowPosition: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isGhost: PropTypes.bool,
  padding: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default Bubble;
