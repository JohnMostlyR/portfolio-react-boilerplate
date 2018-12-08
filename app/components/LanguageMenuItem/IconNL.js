import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../SVGIcon';

function IconNL(props) {
  return (
    <SVGIcon viewBox="0 0 9 6" {...props}>
      <filter id="icon-nl-saturate">
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values={props.isSelected ? '1.5' : '0.5'}
        />
      </filter>
      <g filter="url(#icon-nl-saturate)">
        <rect fill="#21468b" width="9" height="6" />
        <rect fill="#fff" width="9" height="4" />
        <rect fill="#ae1c28" width="9" height="2" />
      </g>
    </SVGIcon>
  );
}

IconNL.propTypes = {
  isSelected: PropTypes.bool,
};

export default IconNL;
