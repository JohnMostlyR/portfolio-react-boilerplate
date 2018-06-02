import styled from 'styled-components';
import PropTypes from 'prop-types';

const Bubble = styled.div`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor || 'inherit'};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px grey;
  color: ${({ color }) => color || 'inherit'};
  padding: ${({ padding }) => padding || 0};

  @media (min-height: ${({ showArrowBreakpoint }) => showArrowBreakpoint || '100%'}) {
    margin-right: 0;
    border-bottom-left-radius: ${(props) => (props.isLeftHanded) ? 0 : '0.5rem'};
    border-bottom-right-radius: ${(props) => (props.isLeftHanded) ? '0.5rem' : 0};
    box-shadow: none;
  }
`;

Bubble.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isLeftHanded: PropTypes.bool,
  padding: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default Bubble;
