import styled from 'styled-components';
import PropTypes from 'prop-types';

import { iconUrl } from '../HandIcon';
import { theme } from '../theme';
import { BASE_FONT_BOLD } from '../typography';

const { button } = theme;

const Button = styled.button`
  position: relative;
  margin: 0 2rem;
  z-index: 2;
  appearance: none;
  background-color: transparent;
  border: 0;
  filter: ${({ isEnabled }) => (isEnabled ? 'none' : 'grayscale()')};
  padding: 0;
  ${BASE_FONT_BOLD} > span {
    display: inline-block;
    background-color: ${button.backgroundColor};
    border: 1px solid ${button.backgroundColor};
    border-radius: 5px;
    color: ${button.color};
    cursor: ${({ isEnabled }) => (isEnabled ? 'pointer' : 'not-allowed')};
    padding: 8px;
  }

  &::after,
  &::before {
    position: absolute;
    content: '';
    height: 32px;
    top: 50%;
    width: 32px;
    z-index: -1;
    background-image: ${() => `url(${iconUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    color: inherit;
    transition: transform 0.3s ease-in-out;
  }

  &::after {
    transform: translate3d(-100%, -50%, 0);
  }

  &::before {
    transform: translate3d(0, -50%, 0) rotateY(180deg);
  }

  &:focus,
  &:hover {
    &::after {
      transform: translate3d(25%, -50%, 0);
    }

    &::before {
      transform: translate3d(-125%, -50%, 0) rotateY(180deg);
    }
  }
`;

Button.propTypes = {
  isEnabled: PropTypes.bool,
};

Button.defaultProps = {
  isEnabled: false,
};

export default Button;
