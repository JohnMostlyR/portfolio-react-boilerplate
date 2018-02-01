import ResponsiveImage from '../ResponsiveImage';

const ImageWrapper = ResponsiveImage.extend`
  width: 13.75rem;
  border-radius: 0.5rem;

  > img {
    border-radius: 0.5rem;
  }
`;

export default ImageWrapper;
