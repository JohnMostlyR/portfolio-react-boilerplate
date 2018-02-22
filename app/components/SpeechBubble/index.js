import React from 'react';
import PropTypes from 'prop-types';
import { lighten } from 'polished';

import Arrow from './Arrow';
import Bubble from './Bubble';
import Container from './Container';

class SpeechBubble extends React.PureComponent {
  render() {
    const {
      arrowHeight,
      backgroundColor,
      children,
      isLeftHanded,
      makeAppear,
      maxWidth,
      padding,
      showArrowBreakpoint,
    } = this.props;
    const lighterBackgroundColor = (backgroundColor && lighten(0.1, backgroundColor)) || 'inherit';

    return (
      <Container
        showArrowBreakpoint={showArrowBreakpoint}
        maxWidth={maxWidth}
        makeAppear={makeAppear}
      >
        <Bubble
          backgroundColor={backgroundColor}
          isLeftHanded={isLeftHanded}
          padding={padding}
          showArrowBreakpoint={showArrowBreakpoint}
        >
          {children}
        </Bubble>
        <Arrow
          isLeftHanded={isLeftHanded}
          height={arrowHeight}
          showBreakpoint={showArrowBreakpoint}
        >
          <path
            stroke={lighterBackgroundColor}
            fill={lighterBackgroundColor}
            d="M0 427.9l175.1 65.7-43.7-65.7z"
          />
          <path
            fill={backgroundColor}
            d="M175.1 493.6l-87.5 21.9v-54.8"
          />
          <path
            fill={lighterBackgroundColor}
            d="M87.6 515.5l21.2 44.5v-49.8"
          />
        </Arrow>
      </Container>
    );
  }
}

SpeechBubble.propTypes = {
  arrowHeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLeftHanded: PropTypes.bool,
  makeAppear: PropTypes.bool,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

export default SpeechBubble;
