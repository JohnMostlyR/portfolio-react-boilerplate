import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import ProjectLinksList from './ProjectLinksList';
import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';
import ProjectTitle from './ProjectTitle';
import ProjectDetailsBody from './ProjectDetailsBody';

import MediaAsset from '../MediaAsset';

const Project = (props) => (
  <Article>
    <MediaAsset imageSource={props.thumbnailUrl} isOdd={props.isOdd} />
    <ProjectBody>
      <div>
        <ProjectHeader>
          <ProjectTitle>{props.title}</ProjectTitle>
        </ProjectHeader>
      </div>
      <ProjectDetailsBody>{props.detailsBodyText}</ProjectDetailsBody>
    </ProjectBody>
    <ProjectLinksList links={props.links} hasFocus={props.hasFocus} />
  </Article>
);

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
