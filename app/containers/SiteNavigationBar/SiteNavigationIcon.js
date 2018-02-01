import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const SiteNavigationIcon = styled(FontAwesome).attrs({
  name: (props) => props.name || 'meh-o',
  fixedWidth: (props) => props.fixedWidth,
})`
  display: none !important;

  @media (min-width: 600px) {
    display: inherit !important;
    transform: rotate(-90deg);
    margin: 0;
  }
`;

export default SiteNavigationIcon;
