import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const ListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
  transition: transform 0.2s ease-in-out;
  vertical-align: middle;

  &:hover {
    transform: scale(1.5);
  }
`;

const StyledA = styled.a`
  color: #fff;
`;

const ProjectExternalLink = (props) => (
  <ListItem data-tip={props.name}>
    <StyledA
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesome name={props.faIcon} fixedWidth />
      <span hidden aria-hidden="false">{props.name}</span>
    </StyledA>
  </ListItem>
);

ProjectExternalLink.propTypes = {
  faIcon: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

ProjectExternalLink.defaultProps = {
  faIcon: 'meh-o',
  name: 'Name',
  url: '#',
};

export default ProjectExternalLink;
