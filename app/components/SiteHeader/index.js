import React from 'react';

import Header from './Header';
import Wrapper from './Wrapper';

import Brand from '../Brand';
import Widgets from '../Widgets';
import SiteNavigationBar from '../../containers/SiteNavigationBar';

const SiteHeader = () => (
  <Header role="banner">
    <Wrapper>
      <Brand />
      <Widgets />
    </Wrapper>
    <SiteNavigationBar />
  </Header>
);

export default SiteHeader;
