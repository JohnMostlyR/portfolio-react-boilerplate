import styled from 'styled-components';

import { BASE_FONT_REGULAR } from '../typography';

const InputGroup = styled.div`
  ${BASE_FONT_REGULAR};
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;

export default InputGroup;
