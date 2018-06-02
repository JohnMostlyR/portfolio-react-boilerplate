import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  flex: none;
  z-index: 9999;
  background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};

  @supports (display: grid) {
    grid-area: header;
  }
`;

Header.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Header;
