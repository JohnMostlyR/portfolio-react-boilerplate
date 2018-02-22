import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Article from './Article';
import Header from './Header';
import H2 from './H2';
import Content from './Content';

function ContentLoadingIndicator(props) {
  const ICON = props.showError ? 'chain-broken' : 'spinner';

  return (
    <Article show={props.show || props.showError}>
      <Header>
        <Content>
          <H2 isError={props.showError}>{props.children}</H2>
          <FontAwesome name={ICON} pulse={!props.showError} size="2x" />
        </Content>
      </Header>
    </Article>
  );
}

ContentLoadingIndicator.propTypes = {
  children: PropTypes.any,
  showError: PropTypes.bool,
  show: PropTypes.bool,
};

export default ContentLoadingIndicator;
