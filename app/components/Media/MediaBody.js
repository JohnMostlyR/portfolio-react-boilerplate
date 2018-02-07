import PropTypes from 'prop-types';
import styled from 'styled-components';

import { alignmentToFlex } from './helper';

const MediaBody = styled.p`
  align-self: ${(props) => alignmentToFlex(props.bodyAlign)};
  display: none;
  flex: 1;
  margin-bottom: 0;
  order: ${(props) => (props.reverse) ? 1 : 2};
  font-size: 0.7rem;

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 424px) {
    display: unset;
  }
`;

MediaBody.propTypes = {
  bodyAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  reverse: PropTypes.bool,
  hideBody: PropTypes.bool,
};

MediaBody.defaultProps = {
  bodyAlign: 'top',
  reverse: false,
};

export default MediaBody;
