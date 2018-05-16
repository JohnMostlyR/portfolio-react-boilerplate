import styled from 'styled-components';

const ContentWrapper = styled.div`
  @supports (display: grid) {
    grid-area: pageContent;
  }
`;

export default ContentWrapper;
