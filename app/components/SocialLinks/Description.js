import styled from 'styled-components';

const Description = styled.span`
  display: inherit;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);

  @media (min-width: 1280px) {
    display: inline-block;
    height: auto;
    margin: 0 0 0 0.5em;
    overflow: visible;
    position: relative;
    width: auto;
    clip: initial;
    font-size: 1rem;
  }
`;

export default Description;
