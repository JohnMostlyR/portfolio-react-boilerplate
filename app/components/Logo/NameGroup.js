import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_FONT_STACK = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  'sans-serif',
];

const NameGroup = styled.g`
  display: none;
  fill: currentColor;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 120px;
  letter-spacing: 12px;

  @media (min-width: ${({ showNameBreakpoint }) => showNameBreakpoint}) {
    display: block;
  }
`;

NameGroup.propTypes = {
  fontFamily: PropTypes.arrayOf(PropTypes.string),
  showNameBreakpoint: PropTypes.string,
};

NameGroup.defaultProps = {
  fontFamily: DEFAULT_FONT_STACK,
  showNameBreakpoint: '320px',
};

export default NameGroup;
