import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import ProjectLinksList from './ProjectLinksList';
import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';

import MediaAsset from '../MediaAsset';
import H3 from '../H3';
import P from '../P';

function Project(props) {
  return (
    <Article>
      <MediaAsset imageSource={props.thumbnailUrl} isOdd={props.isOdd} />
      <ProjectBody>
        <div>
          <ProjectHeader>
            <H3>{props.title}</H3>
          </ProjectHeader>
        </div>
        <P>{props.detailsBodyText}</P>
      </ProjectBody>
      <ProjectLinksList links={props.links} hasFocus={props.hasFocus} />
    </Article>
  );
}

Project.propTypes = {
  detailsBodyText: PropTypes.string,
  isOdd: PropTypes.bool,
  links: PropTypes.array,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  hasFocus: PropTypes.bool,
};

Project.defaultProps = {
  title: 'New Project',
  hasFocus: false,
};

export default Project;
