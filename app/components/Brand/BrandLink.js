import styled from 'styled-components';
import PropTypes from 'prop-types';

const BrandLink = styled.a.attrs({
  href: ({ href }) => href || '/',
  title: ({ title }) => title || '← Back to the homepage',
})`
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  color: #fff;
  overflow: hidden;
  text-decoration: none;

  @media (min-width: ${({ showNameBreakpoint }) => showNameBreakpoint}) {
    width: 100%;
  }
`;

BrandLink.propTypes = {
  href: PropTypes.string,
  showNameBreakpoint: PropTypes.string,
  title: PropTypes.string,
};

export default BrandLink;
