import React from 'react';

import Aside from './Aside';

import SocialLinks from '../SocialLinks';
import LocaleToggle from '../../containers/LocaleToggle';

function Widgets() {
  return (
    <Aside>
      <LocaleToggle />
      <SocialLinks />
    </Aside>
  );
}

export default Widgets;
