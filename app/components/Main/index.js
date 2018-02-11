import React from 'react';
import PropTypes from 'prop-types';

import StyledMain from './StyledMain';
import ChildrenWrapper from './ChildrenWrapper';

function Main({ fixedSiteNavOffset, siteNavIsFixed, children }) {
  return (
    <StyledMain
      fixedSiteNavOffset={fixedSiteNavOffset}
      siteNavIsFixed={siteNavIsFixed}
    >
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </StyledMain>
  );
}

Main.propTypes = {
  children: PropTypes.any,
  fixedSiteNavOffset: PropTypes.number,
  siteNavIsFixed: PropTypes.bool,
};

Main.defaultProps = {
  fixedSiteNavOffset: 0,
  siteNavIsFixed: false,
};

export default Main;
