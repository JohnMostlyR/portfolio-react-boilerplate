import React from 'react';
import PropTypes from 'prop-types';

import NewSpeechBubble from '../SpeechBubble';
import { theme } from '../../styles/theme';

import { BASE_LINE_HEIGHT } from '../../styles/typography';

const { backgroundColor } = theme.loader;

function Header(props) {
  return (
    <header>
      <NewSpeechBubble
        arrowHeight={'4vh'}
        backgroundColor={backgroundColor}
        isLeftHanded={false}
        padding={`${BASE_LINE_HEIGHT}rem`}
        showArrowBreakpoint="750px"
      >
        {props.children}
      </NewSpeechBubble>
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
