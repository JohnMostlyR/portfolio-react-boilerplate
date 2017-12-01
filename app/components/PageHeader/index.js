import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './StyledHeader';
import H2 from './H2';
import HeaderSpeechBubble from './HeaderSpeechBubble';

const PageHeader = (props) => (
  <StyledHeader>
    <HeaderSpeechBubble isLeftHanded={props.isLeftHanded}>
      <H2>{props.children}</H2>
    </HeaderSpeechBubble>
  </StyledHeader>
);

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLeftHanded: PropTypes.bool,
};

PageHeader.defaultProps = {
  isLeftHanded: true,
};

export default PageHeader;
