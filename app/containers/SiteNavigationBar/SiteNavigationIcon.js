import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import mq from '../../styles/templates/mediaQueries';

const SiteNavigationIcon = styled(FontAwesome).attrs({
  name: (props) => props.name || 'meh-o',
  fixedWidth: (props) => props.fixedWidth,
})`
  display: none !important;

  ${mq.m`
    display: inherit !important;
    transform: rotate(-90deg);
    margin: 0;
  `}
`;

export default SiteNavigationIcon;
