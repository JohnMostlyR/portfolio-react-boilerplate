import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import BrandLink from './BrandLink';
import Media from '../Media/index';
import MyLogo from '../../images/my-logo.svg';

const Brand = ({ href, imageSource, text }) => (
  <Wrapper>
    <BrandLink href={href}>
      <Media
        bodyAlign="middle"
        imageSource={imageSource}
        imageAlt="logo"
        imageAlign="middle"
        imageHeight="45px"
        imageWidth="45px"
      >{text}</Media>
    </BrandLink>
  </Wrapper>
);

Brand.propTypes = {
  href: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};

Brand.defaultProps = {
  href: '/',
  imageSource: MyLogo,
  text: 'JOHAN MEESTER',
};

export default Brand;
