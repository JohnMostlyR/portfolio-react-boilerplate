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

function Project({ detailsBodyText, isOdd, thumbnailUrl, title }) {
  return (
    <Article>
      <MediaAsset imageSource={thumbnailUrl} isOdd={isOdd} />
      <ProjectBody>
        <div>
          <ProjectHeader>
            <H3>{title}</H3>
          </ProjectHeader>
        </div>
        <P>{detailsBodyText}</P>
        <P textAlign="right">
          <FormattedMessage {...messages.detailsLink}>
            {
              (message) => (
                <Link
                  to={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}
                  odd={`${isOdd}`}
                >{message}</Link>
              )
            }
          </FormattedMessage>
        </P>
      </ProjectBody>
    </Article>
  );
}

Project.propTypes = {
  detailsBodyText: PropTypes.string,
  isOdd: PropTypes.bool,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
};

Project.defaultProps = {
  title: 'New Project',
};

export default Project;
