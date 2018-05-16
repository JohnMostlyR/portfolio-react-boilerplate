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
      color,
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
          color={color}
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
            d="M424.2 424.4L526.9 640V398.7"
          />
          <path
            fill={backgroundColor}
            d="M848 318.3L424.2 424.4V158.9"
          />
          <path
            fill={lighterBackgroundColor}
            d="M0 0l848 318.3L636.4 0H0z"
          />
        </Arrow>
      </Container>
    );
  }
}

SpeechBubble.propTypes = {
  arrowHeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
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
