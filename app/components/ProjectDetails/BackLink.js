import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Link from './Link';
import messages from './messages';
import SpeechBubble from '../SpeechBubble';
import { theme } from '../../styles/theme';

const {
  borderColor: { odd: backgroundColor },
  color: { odd: textColor },
} = theme.link;
const showArrowBreakpoint = '750px';

const Wrapper = styled.div`
  @media (min-height: ${showArrowBreakpoint}) {
    margin-bottom: ${({ position }) => (position === 'top' ? 0 : '2vh')};
    margin-top: ${({ position }) => (position === 'top' ? 0 : '-7vh')};
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid */
function BackLink({ linkTo, position }) {
  return (
    <Wrapper position={position}>
      <SpeechBubble
        arrowPosition={position === 'top' ? 'bottom-right' : 'top-right'}
        arrowHeight="2vh"
        backgroundColor={backgroundColor}
        color={textColor}
        isGhost
        makeAppear
        showArrowBreakpoint={showArrowBreakpoint}
      >
        <FormattedMessage {...messages.backLink}>
          {message => (
            <Link to={linkTo} color={textColor}>
              {message}
            </Link>
          )}
        </FormattedMessage>
      </SpeechBubble>
    </Wrapper>
  );
}

BackLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']),
};

BackLink.defaultProps = {
  position: 'top',
};

export default BackLink;
