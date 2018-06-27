import React from 'react';
import PropTypes from 'prop-types';

import ProjectsList from './ProjectsList';
import ProjectsListItem from './ProjectsListItem';

import Project from '../../components/Project';

function Projects({ projects, search }) {
  return (
    <React.Fragment>
      <ProjectsList>
        {
          projects.map(({ title, description, thumbnail }, idx) => (
            <ProjectsListItem key={title}>
              <Project
                detailsBodyText={description}
                isOdd={!(idx % 2)}
                search={search}
                thumbnail={thumbnail}
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
  search: PropTypes.string,
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;
