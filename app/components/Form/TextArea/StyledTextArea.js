import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '../theme';
import { iconUrl } from '../HandIcon';
import { BASE_FONT_REGULAR } from '../typography';

export const StyledTextArea = styled.textarea`
  height: ${({ myHeight }) => myHeight ? `${myHeight}px` : '2em'};
  margin: 0 !important;
  width: 100%;
  appearance: none;
  background-color: ${theme.backgroundColor};
  border: 0;
  border-bottom: 1px dotted;
  color: inherit;
  font-size: 1rem;
  outline: none;
  overflow: hidden;
  padding: 0.5rem 1.5rem 0.5rem 0;
  resize: none;
  ${BASE_FONT_REGULAR}

  @media (min-width: 600px) {
    background-image: ${() => `url(${iconUrl})`};
    background-position: calc(100% + 1.5em) 50%;
    background-repeat: no-repeat;
    background-size: 1.5em;
    transition: background-position 0.3s;

    &:focus {
      background-position: center right;
      border-bottom-style: solid;
    }
  }
`;

StyledTextArea.propTypes = {
  myHeight: PropTypes.number,
};

export default StyledTextArea;
