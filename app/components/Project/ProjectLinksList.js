import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProjectExternalLink from './ProjectExternalLink';

const StyledList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  list-style: none;
  text-align: center;

  @media (min-width: 660px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  left: 50%;
  margin: 0 !important;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  z-index: 1;
  backdrop-filter: ${(props) => props.hasFocus ? 'blur(5px)' : 'unset'};
  background-color: rgba(255, 255, 255, 0.5);
  opacity: ${(props) => props.hasFocus ? 1 : 0};
  text-align: center;
  transition: opacity 0.3s 0s ease-in-out;
`;

function ProjectLinksList(props) {
  return (
    <Wrapper hasFocus={props.hasFocus}>
      <StyledList>
        {
          props.links.map(
            ({ name, url /* , faIcon */ }) => (
              <ProjectExternalLink
                key={name}
                name={name}
                url={url}
                hasFocus={props.hasFocus}
              />
            )
          )
        }
      </StyledList>
    </Wrapper>
  );
}

ProjectLinksList.propTypes = {
  links: PropTypes.array.isRequired,
  hasFocus: PropTypes.bool,
};

ProjectLinksList.defaultProps = {
  hasFocus: false,
};

export default ProjectLinksList;
