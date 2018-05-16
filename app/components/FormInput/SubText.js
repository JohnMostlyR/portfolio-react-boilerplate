import styled from 'styled-components';

import { BASE_LINE_HEIGHT, MODULAR_SCALE_FACTOR } from '../../styles/typography';

const SubText = styled.div`
  margin: 0 !important;
  padding: 0.5em 0 0 0;
  font-size: ${() => `${1 / MODULAR_SCALE_FACTOR}rem`};
  line-height: ${() => BASE_LINE_HEIGHT};
`;

export default SubText;
