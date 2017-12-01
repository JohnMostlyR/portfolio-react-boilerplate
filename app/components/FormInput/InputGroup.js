import styled from 'styled-components';
import { baseFontRegular } from '../../styles/templates/typography';

const InputGroup = styled.div`
  ${baseFontRegular};
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  overflow-x: hidden;
  position: relative;
  z-index: 1;

  &:not(:first-child) {
    padding-top: .5rem;
  }
`;

export default InputGroup;
