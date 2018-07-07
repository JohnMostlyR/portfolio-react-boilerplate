import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Article from './Article';
import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';

import MediaAsset from '../MediaAsset';
import H3 from '../H3';
import P from '../P';
import Link from '../Link';

class Project extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { detailsBodyText, isOdd, search, thumbnail, title } = this.props;

    return (
      <Article>
        <MediaAsset imageSource={thumbnail} isOdd={isOdd} />
        <ProjectBody>
          <div>
            <ProjectHeader>
              <H3>{title}</H3>
            </ProjectHeader>
          </div>
          <P>{detailsBodyText}</P>
          <P textAlign="right">
            <FormattedMessage {...messages.detailsLink}>
              {message => (
                <Link // eslint-disable-line jsx-a11y/anchor-is-valid
                  to={{
                    pathname: `/projects/${title
                      .toLowerCase()
                      .replace(/\W+/g, '-')}/`,
                    search,
                  }}
                  odd={`${isOdd}`}
                >
                  {message}
                </Link>
              )}
            </FormattedMessage>
          </P>
        </ProjectBody>
      </Article>
    );
  }
}

Project.propTypes = {
  detailsBodyText: PropTypes.string,
  isOdd: PropTypes.bool,
  search: PropTypes.string,
  thumbnail: PropTypes.shape({
    file: PropTypes.shape({
      details: PropTypes.shape({
        image: PropTypes.shape({
          height: PropTypes.number,
          width: PropTypes.number,
        }),
      }),
      fileName: PropTypes.string,
      url: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Project;
