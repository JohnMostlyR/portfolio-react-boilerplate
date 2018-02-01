import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelContent = styled.span`
  display: inline-block;
  position: absolute;
  top: 100%;
  transition: top 0.2s;
  ${(props) => ((props.hasFocus) ? 'top: -16px; font-size: 12px;' : '')}
`;

LabelContent.propTypes = {
  hasFocus: PropTypes.bool,
};

export default LabelContent;
