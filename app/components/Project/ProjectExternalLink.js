import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SVGIcon from '../../components/SVGIcon';
import {
  BASE_FONT_REGULAR,
  BASE_LINE_HEIGHT,
  MODULAR_SCALE_FACTOR,
} from '../../styles/typography';

const ListItem = styled.li`
  transition: transform 0.3s 0s ease-in-out;
  vertical-align: middle;
  margin-top: ${() => `${BASE_LINE_HEIGHT}rem`} 0 0 0 !important;

  &:nth-child(odd) {
    transform: ${(props) => props.hasFocus ? 'translateX(0%)' : 'translateX(-400%)'};
  }

  &:nth-child(even) {
    transform: ${(props) => props.hasFocus ? 'translateX(0%)' : 'translateX(400%)'};
  }

  @media (min-width: 600px) {
    &:not(:first-child) {
      margin: 0 0 0 ${() => `${BASE_LINE_HEIGHT}rem`} !important;
    }
  }
`;

const StyledA = styled.a`
  align-items: center;
  display: flex;
  background-color: black;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 0 5px dimgrey;
  opacity: 1 !important;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: text-shadow 0.2s ease-in-out;
  white-space: nowrap;
  font-size: ${() => `${1 / MODULAR_SCALE_FACTOR}rem`};
  ${BASE_FONT_REGULAR}

  &:hover {
    box-shadow: 0 0 1px dimgrey;
  }
`;

const Label = styled.span`
  margin-right: 0.5em;
`;

function ProjectExternalLink(props) {
  return (
    <ListItem data-tip={props.name} hasFocus={props.hasFocus}>
      <StyledA
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Label>{props.name}</Label>
        <SVGIcon viewBox="0 0 576 512">
          <path
            d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"
          />
        </SVGIcon>
      </StyledA>
    </ListItem>
  );
}

ProjectExternalLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  hasFocus: PropTypes.bool,
};

ProjectExternalLink.defaultProps = {
  name: 'External Link',
  url: '#',
  hasFocus: false,
};

export default ProjectExternalLink;
