import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './StyledHeader';
import H2 from '../H2';
import SpeechBubble from '../SpeechBubble';
import { theme } from '../../styles/theme';

const {
  pageHeader: { backgroundColor, color },
} = theme;

const PageHeader = ({ arrowPosition, children }) => (
  <StyledHeader>
    <SpeechBubble
      arrowHeight="4vh"
      arrowPosition={arrowPosition}
      backgroundColor={backgroundColor}
      makeAppear
      showArrowBreakpoint="750px"
    >
      <H2 color={color}>{children}</H2>
    </SpeechBubble>
  </StyledHeader>
);

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  arrowPosition: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ]),
};

export default PageHeader;
