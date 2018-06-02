import React from 'react';
import PropTypes from 'prop-types';

import Figure from './Figure';
import Body from './Body';
import ImageWrapper from './ImageWrapper';

function MediaAsset(props) {
  return (
    <Figure isOdd={props.isOdd}>
      <Body>
        <ImageWrapper imageSource={props.imageSource} imageAlt="Project" ratio="16by9" />
      </Body>
    </Figure>
  );
}

MediaAsset.propTypes = {
  imageSource: PropTypes.string.isRequired,
  isOdd: PropTypes.bool,
};

export default MediaAsset;
