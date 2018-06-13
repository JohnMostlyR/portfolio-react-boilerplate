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

const { backgroundColor, color } = theme.projectDetails;

marked.options({
  breaks: true,
});

class ProjectDetails extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      project: {
        article,
        description,
        images,
        title,
      },
    } = this.props;
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
            backgroundColor={backgroundColor}
            color={color}
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
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    article: PropTypes.string,
    description: PropTypes.string.isRequired,
    images: PropTypes.array,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectDetails;
