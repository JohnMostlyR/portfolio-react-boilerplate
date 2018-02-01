import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const ResponsiveImage = (props) => (
  <Wrapper {...props}>
    <img src={props.imageSource} alt={props.imageAlt} />
  </Wrapper>
);

ResponsiveImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

ResponsiveImage.defaultProps = {
  noPlaceholder: false,
};

export default styled(ResponsiveImage)`
  /* make it a styled component */
`;
