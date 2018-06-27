import React from 'react';
import PropTypes from 'prop-types';

import MediaImage from './MediaImage';
import MediaBody from './MediaBody';
import MediaWrapper from './MediaWrapper';

const Media = props => (
  <MediaWrapper>
    <MediaImage
      imageAlign={props.imageAlign}
      imageAlt={props.imageAlt}
      imageHeight={props.imageHeight}
      imageLink={props.imageLink}
      imageSource={props.imageSource}
      imageWidth={props.imageWidth}
      reverse={props.reverse}
      spacing={props.spacing}
    />
    <MediaBody
      bodyAlign={props.bodyAlign}
      spacing={props.spacing}
      reverse={props.reverse}
    >
      {props.children}
    </MediaBody>
  </MediaWrapper>
);

Media.propTypes = {
  bodyAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  imageAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  imageAlt: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  imageLink: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  reverse: PropTypes.bool,
  spacing: PropTypes.string,
};

Media.defaultProps = {
  spacing: '0',
};

export default Media;
