import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const Icon = styled.div`
  align-items: center;
  display: flex;
  height: ${rem(24)};
  width: ${rem(36)};
  border: 1px solid #fff;
  
  &:hover > img {
    filter: saturate(150%);
  }
  
  > img {
    filter: ${(props) => props.isChecked ? 'saturate(150%)' : 'saturate(50%)'};
  }
`;

Icon.propTypes = {
  isChecked: PropTypes.bool,
};

export default Icon;
