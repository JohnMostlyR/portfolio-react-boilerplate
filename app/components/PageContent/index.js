/**
*
* PageContent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../../styles/theme';

import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';

import SpeechBubble from '../../components/SpeechBubble';
import PageHeader from '../../components/PageHeader';
import { BASE_LINE_HEIGHT } from '../../styles/typography';

function PageContent(props) {
  let renderThis = (
    <SpeechBubble
      arrowHeight="9vh"
      arrowPosition="bottom-right"
      backgroundColor={theme.speechBubble.backgroundColor}
      color={theme.speechBubble.color}
      makeAppear={false}
      maxWidth="30em"
      padding={`${BASE_LINE_HEIGHT}rem`}
      showArrowBreakpoint="750px"
    >
      {props.content}
    </SpeechBubble>
  );

  if (props.noSpeechBubble) {
    renderThis = props.content;
  }

  return (
    <Wrapper>
      <PageHeader arrowPosition={'bottom-left'}>
        {props.title}
      </PageHeader>
      <ContentWrapper>
        {renderThis}
      </ContentWrapper>
    </Wrapper>
  );
}

PageContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  noSpeechBubble: PropTypes.bool,
};

export default PageContent;

