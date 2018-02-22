/**
*
* PageContent
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

import SpeechBubble from '../../components/SpeechBubble';
import PageHeader from '../../components/PageHeader';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';

function PageContent(props) {
  let renderThis = (
    <SpeechBubble
      arrowHeight={'9vh'}
      backgroundColor="#f90"
      isLeftHanded={false}
      makeAppear={false}
      maxWidth={'940px'}
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
      <FlexRow>
        <FlexColumn>
          <PageHeader isLeftHanded>
            {props.title}
          </PageHeader>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          {renderThis}
        </FlexColumn>
      </FlexRow>
    </Wrapper>
  );
}

PageContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  noSpeechBubble: PropTypes.bool,
};

export default PageContent;

