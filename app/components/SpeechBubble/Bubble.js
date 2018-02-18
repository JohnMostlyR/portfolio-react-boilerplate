import styled from 'styled-components';
import PropTypes from 'prop-types';

const Bubble = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'inherit'};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px grey;
  padding: ${({ padding }) => padding || '1vw'};

  > p {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }

  @media (min-height: ${({ showArrowBreakpoint }) => showArrowBreakpoint || '100%'}) {
    margin-right: 0;
    border-bottom-left-radius: ${(props) => (props.isLeftHanded) ? 0 : '0.5rem'};
    border-bottom-right-radius: ${(props) => (props.isLeftHanded) ? '0.5rem' : 0};
    box-shadow: none;
  }
`;

Bubble.propTypes = {
  backgroundColor: PropTypes.string,
  isLeftHanded: PropTypes.bool,
  padding: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default Bubble;
