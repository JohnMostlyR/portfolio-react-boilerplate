import React from 'react';
import PropTypes from 'prop-types';

import ProjectsList from './ProjectsList';
import ProjectsListItem from './ProjectsListItem';

import Project from '../../components/Project';

function Projects({ projects }) {
  return (
    <React.Fragment>
      <ProjectsList>
        {
          projects.map(({ title, description, thumbnail: { url } }, idx) => (
            <ProjectsListItem key={title}>
              <Project
                detailsBodyText={description}
                isOdd={!(idx % 2)}
                thumbnailUrl={url}
                title={title}
              />
            </ProjectsListItem>
          ))
        }
      </ProjectsList>
    </React.Fragment>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;
