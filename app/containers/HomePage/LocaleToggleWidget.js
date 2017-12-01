import styled from 'styled-components';
import { sizes } from '../../styles/templates/mediaQueries';

const LocaleToggleWidget = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: unset;
  top: 1rem;
  width: 100%;
  
  @media (max-height: 400px) and (max-width: ${sizes.m}px) {
    justify-content: flex-end;
    right: 1rem;
  }
`;

export default LocaleToggleWidget;
