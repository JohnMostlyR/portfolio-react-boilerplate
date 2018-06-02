import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.span`
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  white-space: nowrap;

  &::after {
    content: ${({ isSelected }) => isSelected ? '"\u2713"' : '""'};
    margin-left: 0.5em;
  }
`;

Label.propTypes = {
  isSelected: PropTypes.bool,
};

export default Label;
