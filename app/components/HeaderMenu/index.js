import React from 'react';

import Container from './Container';

import SocialLinks from '../SocialLinks';
import LanguageMenu from '../../containers/SelectLocale';

import { theme } from '../../styles/theme';

const { backgroundColor, color } = theme.siteHeader;

function HeaderMenu() {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      <LanguageMenu />
      <SocialLinks color={backgroundColor} />
    </Container>
  );
}

export default HeaderMenu;
