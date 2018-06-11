import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Parser from 'html-react-parser';

import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import BackLink from './BackLink';
import Article from './Article';
import Image from './Image';
import Description from './Description';

import SpeechBubble from '../../components/SpeechBubble';
import { BASE_LINE_HEIGHT } from '../../styles/typography';
import { theme } from '../../styles/theme';

marked.options({
  breaks: true,
});

function ProjectDetails({ project = {} }) {
  const {
    article = '',
    description = '',
    images,
    title = '',
  } = project;
  const htmlFromMD = marked(article);
  const parsedArticle = htmlFromMD
    .replace(
      /(<a\s+href="(https?:\/\/.+)"[^>]*>)/ig,
      (match, p1, p2) => (
        `<a href="${p2}" rel="noopener noreferrer" target="_blank">`
      )
    );
  const reactElementsFromHTML = Parser(parsedArticle);

  return (
    <Wrapper>
      <ContentWrapper>
        <BackLink />
        <SpeechBubble
          arrowHeight="9vh"
          arrowPosition={'bottom-right'}
          backgroundColor={theme.speechBubble.backgroundColor}
          color={theme.speechBubble.color}
          makeAppear={false}
          padding={`${BASE_LINE_HEIGHT}rem 1rem`}
          showArrowBreakpoint="750px"
        >
          <h1>{title}</h1>
          <Description>{description}</Description>
          {
            (images && Array.isArray(images)) && <Image images={images} />
          }
          <Article>{reactElementsFromHTML}</Article>
        </SpeechBubble>
        <BackLink position={'bottom'} />
      </ContentWrapper>
    </Wrapper>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetails;
