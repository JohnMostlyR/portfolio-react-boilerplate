import styled from 'styled-components';

const Aside = styled.aside`
  align-self: flex-start;
  display: flex;
  margin-left: auto;
  background-color: #fff;
  color: #575756;

  > aside:not(:last-of-type) {
    border-right: 1px solid #575756;
  }

  @media (min-width: 480px) {
    padding: 0 1em 0 4em;
    background-color: transparent;
    background-image: linear-gradient(45deg, transparent 17%, #fff 17%);
    background-position-x: 0.5em;
  }
`;

export default Aside;
