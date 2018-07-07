import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';
import Bubble from './Bubble';
import Container from './Container';

class SpeechBubble extends React.PureComponent {
  render() {
    const {
      arrowHeight,
      arrowPosition,
      backgroundColor,
      color,
      children,
      isGhost,
      makeAppear,
      maxWidth,
      padding,
      showArrowBreakpoint,
    } = this.props;

    return (
      <Container
        showArrowBreakpoint={showArrowBreakpoint}
        maxWidth={maxWidth}
        makeAppear={makeAppear}
      >
        {arrowPosition.startsWith('top-') && (
          <Arrow
            arrowPosition={arrowPosition}
            backgroundColor={backgroundColor}
            height={arrowHeight}
            isGhost={isGhost}
            showBreakpoint={showArrowBreakpoint}
          />
        )}
        <Bubble
          arrowPosition={arrowPosition}
          backgroundColor={backgroundColor}
          color={color}
          isGhost={isGhost}
          padding={padding}
          showArrowBreakpoint={showArrowBreakpoint}
        >
          {children}
        </Bubble>
        {arrowPosition.startsWith('bottom-') && (
          <Arrow
            arrowPosition={arrowPosition}
            backgroundColor={backgroundColor}
            height={arrowHeight}
            isGhost={isGhost}
            showBreakpoint={showArrowBreakpoint}
          />
        )}
      </Container>
    );
  }
}

SpeechBubble.propTypes = {
  arrowHeight: PropTypes.string,
  arrowPosition: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isGhost: PropTypes.bool,
  makeAppear: PropTypes.bool,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  showArrowBreakpoint: PropTypes.string,
};

SpeechBubble.defaultProps = {
  arrowPosition: 'bottom-left',
  isGhost: false,
};

export default SpeechBubble;
