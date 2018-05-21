import styled from 'styled-components';

import { theme } from '../theme';
import { iconUrl } from '../HandIcon';

export const StyledInput = styled.input`
  margin: 0 !important;
  width: 100%;
  border: 0;
  border-bottom: 1px dotted;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem 1.5rem 0.5rem 0;
  background-color: ${theme.backgroundColor};
  color: inherit;

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

export default StyledInput;
