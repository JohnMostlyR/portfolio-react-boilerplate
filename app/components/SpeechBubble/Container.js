import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  align-items: center;
  display: inline-flex;
  flex-flow: column nowrap;
  filter: none;
  max-width: ${({ maxWidth }) => maxWidth || 'unset'};

  @media (min-height: ${({ showArrowBreakpoint }) => showArrowBreakpoint || '100%'}) {
    filter: drop-shadow(0 0 5px grey);
  }
`;

Container.propTypes = {
  maxWidth: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default Container;
