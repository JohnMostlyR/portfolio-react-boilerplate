import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MODULAR_SCALE_FACTOR } from '../../styles/typography';

const Container = styled.div`
  align-self: flex-start;
  display: flex;
  margin-left: auto;
  background-color: ${({ color }) => color || 'unset'};
  color: ${({ backgroundColor }) => backgroundColor || 'unset'};
  font-size: ${MODULAR_SCALE_FACTOR ** 2}rem;
  padding: 0.5rem 1rem;

  > *:not(:last-child) {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid ${({ backgroundColor }) => backgroundColor || 'inherit'};
  }

  @media (min-width: 480px) {
    padding: 0.5rem 1rem 0.5rem 4rem;
    background-color: transparent;
    background-image: linear-gradient(45deg, transparent 15%, ${({ color }) => color || 'inherit'} 15%);
    background-position-x: 0.5rem;
  }
`;

Container.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default Container;
