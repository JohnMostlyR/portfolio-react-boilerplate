import React from 'react';
import PropTypes from 'prop-types';

import Figure from './Figure';
import Body from './Body';
import ImageWrapper from './ImageWrapper';

function MediaAsset({ imageSource = {}, isOdd }) {
  const { file: { details: { image }, url }, title = '' } = imageSource;
  return (
    <Figure isOdd={isOdd}>
      <Body>
        <ImageWrapper imageDimensions={image}>
          <img src={url} alt={title} />
        </ImageWrapper>
      </Body>
    </Figure>
  );
}

MediaAsset.propTypes = {
  imageSource: PropTypes.shape({
    file: PropTypes.shape({
      details: PropTypes.shape({
        image: PropTypes.shape({
          height: PropTypes.number,
          width: PropTypes.number,
        }),
      }),
      fileName: PropTypes.string,
      url: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
  isOdd: PropTypes.bool,
};

export default MediaAsset;
