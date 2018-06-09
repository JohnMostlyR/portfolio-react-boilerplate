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
    const { file: { fileName, url } } = _image;
    const [relativeSizeIndication] = fileName
      .replace(/\.(png|jpeg)/i, '')
      .trim()
      .split('-')
      .slice(-1);
    srcSet[relativeSizeIndication] = url;
  });

  return srcSet;
}

function getImageDescription(images) {
  const [{ title = '' } = {}] = images.slice(-1);
  return title;
}

function Image({ images = [] }) {
  const { s, m, l, xl } = transformImagesArray(images);
  const altText = getImageDescription(images);

  if (s && m && l && xl) {
    return (
      <ImageWrapper>
        <StyledPicture>
          <source media="(max-width: 424px)" srcSet={s} />
          <source media="(max-width: 767px)" srcSet={m} />
          <source media="(max-width: 949px)" srcSet={l} />
          <source media="(min-width: 950px)" srcSet={xl} />
          <img src={xl} alt={altText} />
        </StyledPicture>
      </ImageWrapper>
    );
  }

  return <div />;
}

Image.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Image;
