import React from 'react';
import PropTypes from 'prop-types';

import SpeechBubble from '../SpeechBubble';
import { theme } from '../../styles/theme';

import { BASE_LINE_HEIGHT } from '../../styles/typography';

const { backgroundColor } = theme.loader;

function Header(props) {
  return (
    <header>
      <SpeechBubble
        arrowHeight={'4vh'}
        arrowPosition="bottom-right"
        backgroundColor={backgroundColor}
        padding={`${BASE_LINE_HEIGHT}rem`}
        showArrowBreakpoint="750px"
      >
        {props.children}
      </SpeechBubble>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Header;
