/**
 *
 * FormInfoItemsListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

function FormInfoItemsListItem(props) {
  return (
    <li>
      <FontAwesome name="info-circle" /> <span>{props.children}</span>
    </li>
  );
}

FormInfoItemsListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FormInfoItemsListItem;
