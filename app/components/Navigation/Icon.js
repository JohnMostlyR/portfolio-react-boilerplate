import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: ({ viewBox }) => viewBox || '0 0 512 512',
  focusable: 'false',
})`
  height: 1em;
  position: relative;
  width: 1em;
  fill: currentColor;
`;

Icon.propTypes = {
  viewBox: PropTypes.string,
};

export default Icon;
