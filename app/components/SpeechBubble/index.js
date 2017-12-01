import React from 'react';
import PropTypes from 'prop-types';

import Bubble from './Bubble';
import Wrapper from './Wrapper';

const SpeechBubble = (props) => (
  <Wrapper>
    <Bubble isLeftHanded={props.isLeftHanded}>
      {props.children}
    </Bubble>
  </Wrapper>
);

SpeechBubble.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLeftHanded: PropTypes.bool,
};

export default SpeechBubble;
