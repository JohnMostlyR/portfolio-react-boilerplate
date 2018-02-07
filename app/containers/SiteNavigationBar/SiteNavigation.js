import PropTypes from 'prop-types';
import styled from 'styled-components';

const SiteNavigation = styled.nav`
  width: 100%;
  padding: 0.35rem 0;
  position: ${(props) => props.isAtScreenTop ? 'fixed' : 'unset'};
  top: 0;
  z-index: 9999;
  background-color: #575756;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    left: 100%;
    position: ${(props) => props.isAtScreenTop ? 'fixed' : 'absolute'};
    top: ${(props) => props.isAtScreenTop ? 0 : '5.5rem'};
    width: unset;
    padding: 0 0.35rem;
    transform: rotate(90deg);
    transform-origin: top left;
    background-color: transparent;
    border-bottom: none;
    box-shadow: none;
  }
`;

SiteNavigation.propTypes = {
  isAtScreenTop: PropTypes.bool,
};

export default SiteNavigation;
