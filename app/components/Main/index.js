import React from 'react';
import PropTypes from 'prop-types';

import StyledMain from './StyledMain';

function Main({ children, mainRef }) {
  return <StyledMain innerRef={mainRef}>{children}</StyledMain>;
}

Main.propTypes = {
  children: PropTypes.any,
  mainRef: PropTypes.func,
};

export default Main;
