import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import { baseFontRegular } from '../../styles/templates/typography';

const ListItem = styled.li`
  transition: transform 0.3s ease-in-out;
  vertical-align: middle;

  &:nth-child(odd) {
    transform: ${(props) => props.hasFocus ? 'translateX(0%)' : 'translateX(-400%)'};
  }

  &:nth-child(even) {
    transform: ${(props) => props.hasFocus ? 'translateX(0%)' : 'translateX(400%)'};
  }

  @media (min-width: 600px) {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const StyledA = styled.a`
  display: inline-block;
  background-color: black;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 0 5px dimgrey;
  opacity: 1 !important;
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: text-shadow 0.2s ease-in-out;
  white-space: nowrap;
  font-size: 0.875rem;
  ${baseFontRegular}

  &:hover {
    box-shadow: 0 0 1px dimgrey;
  }
`;

const ProjectExternalLink = (props) => (
  <ListItem data-tip={props.name} hasFocus={props.hasFocus}>
    <StyledA
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{props.name}&nbsp;<FontAwesome name={props.faIcon} fixedWidth /></span>
    </StyledA>
  </ListItem>
);

ProjectExternalLink.propTypes = {
  faIcon: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  hasFocus: PropTypes.bool,
};

ProjectExternalLink.defaultProps = {
  faIcon: 'external-link',
  name: 'External Link',
  url: '#',
  hasFocus: false,
};

export default ProjectExternalLink;
