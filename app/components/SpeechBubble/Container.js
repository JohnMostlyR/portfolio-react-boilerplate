import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  z-index: 10;
  filter: none;

  @media (min-height: ${({ showArrowBreakpoint }) => showArrowBreakpoint || '100%'}) {
    filter: drop-shadow(0 0 5px grey);
  }

  @media (min-width: ${({ maxWidth }) => maxWidth || 'unset'}) {
    width: ${({ maxWidth }) => maxWidth || 'unset'};
  }
`;

Container.propTypes = {
  maxWidth: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default Container;
