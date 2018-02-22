import React from 'react';
import PropTypes from 'prop-types';

import NewSpeechBubble from '../SpeechBubble';

function Header(props) {
  return (
    <header>
      <NewSpeechBubble
        arrowHeight={'4vh'}
        backgroundColor="#575756"
        isLeftHanded={false}
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
