import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageWrapper from './ImageWrapper';

const StyledPicture = styled.picture`
  * + * {
    margin: 0;
  }
`;

function transformImagesArray(images) {
  const srcSet = {};

  images.forEach((_image) => {
    const { file: { details: { image: { height, width } }, fileName, url } } = _image;
    const [relativeSizeIndication] = fileName
      .replace(/\.(png|jpe?g)/i, '')
      .trim()
      .split('-')
      .slice(-1);
    srcSet[relativeSizeIndication] = {
      dimensions: {
        height,
        width,
      },
      url,
    };
  });

  return srcSet;
}

function getImageDescription(images) {
  const [{ title = '' } = {}] = images.slice(-1);
  return title;
}

function composeSourceElements(sources) {
  return sources.map((source) => {
    const { media: { breakpoint, size }, srcSet } = source;

    return (<source key={size} media={`(${breakpoint}: ${size}px)`} srcSet={srcSet} />);
  });
}

function Image({ images = [] }) {
  if (images.length === 0) {
    return <div />;
  }

  const { s, m, l, xl } = transformImagesArray(images);
  const altText = getImageDescription(images);
  const breakpoints = [
    {
      media: { breakpoint: 'max-width', size: 424 },
      srcSet: s.url,
    },
    {
      media: { breakpoint: 'max-width', size: 767 },
      srcSet: m.url,
    },
    {
      media: { breakpoint: 'max-width', size: 949 },
      srcSet: l.url,
    },
    {
      media: { breakpoint: 'min-width', size: 950 },
      srcSet: xl.url,
    },
  ];
  const imageDimensions = [s.dimensions, m.dimensions, l.dimensions, xl.dimensions];

  return (
    <ImageWrapper
      breakpoints={breakpoints}
      imageDimensions={imageDimensions}
      defaultImage={s.dimensions}
    >
      <StyledPicture>
        {
          composeSourceElements(breakpoints)
        }
        <img src={xl.url} alt={altText} />
      </StyledPicture>
    </ImageWrapper>
  );
}
Image.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.shape({
        details: PropTypes.shape({
          image: PropTypes.shape({
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
        fileName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Image;
