import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @supports (display: grid) {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'main';
  }
`;

export default Wrapper;
