import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProjectExternalLink from './ProjectExternalLink';

const StyledList = styled.ul`
  height: 1.5em;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

const ProjectLinksList = (props) => (
  <StyledList>
    {
        props.links.map(
            ({ name, url, faIcon }) => (
              <ProjectExternalLink
                key={name}
                name={name}
                url={url}
                faIcon={faIcon}
              />
            )
        )
      }
  </StyledList>
);

ProjectLinksList.propTypes = {
  links: PropTypes.array.isRequired,
};

export default ProjectLinksList;
