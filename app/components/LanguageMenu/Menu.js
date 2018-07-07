import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = styled.div.attrs({
  role: 'menu',
})`
  display: flex;
  flex-flow: column nowrap;
  left: -50%;
  margin: 0.5rem 0 0 0.25rem;
  position: absolute;
  z-index: 9999;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0 15px grey;
  list-style: none;
  padding: 0;
  transform: scale(${({ isExpanded }) => (isExpanded ? 1 : 0)});
  transform-origin: 1.5rem top;
  transition: transform 0.2s 0s ease-in-out;

  @media (min-width: 768px) {
    left: 0;
    transform-origin: left top;
  }
`;

Menu.propTypes = {
  isExpanded: PropTypes.bool,
};

Menu.defaultProps = {
  isExpanded: false,
};

export default Menu;
