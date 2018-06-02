import styled from 'styled-components';
import PropTypes from 'prop-types';

const Article = styled.article`
  align-self: center;
  left: 50%;
  position: absolute;
  top: ${({ show }) => show ? '50%' : '125%'};
  transition: top 0.75s 0s cubic-bezier(0.32, 1.5, 0.29, 1);
  transform: translate3d(-50%, -50%, 0);
  z-index: 99;
`;

Article.propTypes = {
  show: PropTypes.bool,
};

export default Article;
