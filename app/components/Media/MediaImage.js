import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { alignmentToFlex } from './helper';

const StyledImg = styled.img.attrs({
  src: (props) => props.imageSource || '',
  alt: (props) => props.imageAlt || '',
})`
  align-self: ${(props) => alignmentToFlex(props.imageAlign)};
  height: ${(props) => props.imageHeight};
  margin: ${(props) => (props.reverse) ? '0 0 0 0.5em' : '0 0.5em 0 0'};
  order: ${(props) => (props.reverse) ? 2 : 1};
  width: ${(props) => props.imageWidth};
  max-width: 100%;
`;

const MediaImage = (props) => (
  <StyledImg {...props} />
);

MediaImage.propTypes = {
  imageAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  imageAlt: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  imageLink: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  reverse: PropTypes.bool,
};

MediaImage.defaultProps = {
  imageAlign: 'top',
  imageHeight: 'auto',
  imageWidth: '100%',
  reverse: false,
};

export default MediaImage;
