import React from 'react';

import Header from './Header';
import Wrapper from './Wrapper';

import Brand from '../Brand';
import HeaderMenu from '../HeaderMenu';
import { theme } from '../../styles/theme';

const { backgroundColor } = theme.siteHeader;

const SiteHeader = () => (
  <Header backgroundColor={backgroundColor}>
    <Wrapper borderColor={backgroundColor}>
      <Brand />
      <HeaderMenu />
    </Wrapper>
  </Header>
);

export default SiteHeader;
