import styled from 'styled-components';
import { rem } from 'polished';

const BrandLink = styled.a.attrs({
  href: (props) => props.href || '#',
})`
  display: inline-block;
  width: ${rem('45px')};
  color: #fff;
  text-decoration: none;
`;

export default BrandLink;
