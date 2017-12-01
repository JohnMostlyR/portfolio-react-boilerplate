import React from 'react';

import Header from './Header';
import Wrapper from './Wrapper';

import Brand from '../Brand';
import SocialLinks from '../SocialLinks';
import SiteNavigationBar from '../../containers/SiteNavigationBar';

const SiteHeader = () => (
  <Header role="banner">
    <Wrapper>
      <Brand />
      <SocialLinks />
    </Wrapper>
    <SiteNavigationBar />
  </Header>
);

export default SiteHeader;
