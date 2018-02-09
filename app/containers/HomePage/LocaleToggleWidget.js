import styled from 'styled-components';

const LocaleToggleWidget = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: unset;
  top: 1rem;
  width: 100%;

  @media (max-height: 400px) and (max-width: 600px) {
    justify-content: flex-end;
    right: 1rem;
  }
`;

export default LocaleToggleWidget;
