import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Article from './Article';
import ProjectLinksList from './ProjectLinksList';
import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';
import ProjectTitle from './ProjectTitle';
import ProjectDetailsBody from './ProjectDetailsBody';
import ProjectDetailsTitle from './ProjectDetailsTitle';

import MediaAsset from '../MediaAsset';

const Project = (props) => (
  <Article>
    <MediaAsset imageSource={props.thumbnailUrl} isOdd={props.isOdd} />
    <ProjectBody>
      <div>
        <ProjectHeader>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectLinksList links={props.links} />
        </ProjectHeader>
        <ProjectDetailsTitle><strong>{props.detailsTitle}</strong></ProjectDetailsTitle>
      </div>
      <ProjectDetailsBody>{props.detailsBodyText}</ProjectDetailsBody>
    </ProjectBody>
    <ReactTooltip />
  </Article>
);

Project.propTypes = {
  detailsTitle: PropTypes.string,
  detailsBodyText: PropTypes.string,
  isOdd: PropTypes.bool,
  links: PropTypes.array,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
};

Project.defaultProps = {
  title: 'New Project',
};

export default Project;
