import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './StyledHeader';
import H2 from '../H2';
import SpeechBubble from '../SpeechBubble';
import { theme } from '../../styles/theme';

const PageHeader = (props) => (
  <StyledHeader>
    <SpeechBubble
      arrowHeight={'4vh'}
      backgroundColor={theme.pageHeader.backgroundColor}
      isLeftHanded={props.isLeftHanded}
      makeAppear
      showArrowBreakpoint="750px"
    >
      <H2 color={theme.pageHeader.color}>{props.children}</H2>
    </SpeechBubble>
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
