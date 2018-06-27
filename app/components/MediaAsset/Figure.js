import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const { backgroundColor } = theme.project.media;

/* eslint-disable indent */
const Figure = styled.figure`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  order: ${props => (props.isOdd ? 1 : 2)};
  position: relative;
  width: 100%;
  background-color: ${props =>
    props.isOdd ? backgroundColor.odd : backgroundColor.even};
  border-radius: 0.5rem;

  &::before {
    height: 0;
    left: 50%;
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    width: 0;
    content: '';
    border-bottom: 0;
    border-left: 0.75em solid transparent;
    border-top: 0.75em solid
      ${props => (props.isOdd ? backgroundColor.odd : backgroundColor.even)};
    border-right: 0.75em solid transparent;

    @media (min-width: 660px) {
      left: ${props => (props.isOdd ? '100%' : 'inherit')};
      right: ${props => (props.isOdd ? 'inherit' : '100%')};
      top: inherit;
      transform: translateX(0);
      border-bottom: 0.75em solid transparent;
      border-left: ${props =>
        props.isOdd ? `0.75em solid ${backgroundColor.odd}` : 0};
      border-top: 0.75em solid transparent;
      border-right: ${props =>
        props.isOdd ? 0 : `0.75em solid ${backgroundColor.even}`};
    }
  }

  @media (min-width: 660px) {
    width: auto;
  }
`;

Figure.propTypes = {
  isOdd: PropTypes.bool,
};

export default Figure;
