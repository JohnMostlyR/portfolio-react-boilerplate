import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const Icon = styled.div`
  align-items: center;
  display: flex;
  height: ${rem(24)};
  width: ${rem(36)};
  border: 1px solid #575756;

  > img {
    filter: ${(props) => props.isChecked ? 'saturate(150%)' : 'saturate(50%)'};
  }

  &:hover > img {
    filter: saturate(150%);
  }
`;

Icon.propTypes = {
  isChecked: PropTypes.bool,
};

export default Icon;
