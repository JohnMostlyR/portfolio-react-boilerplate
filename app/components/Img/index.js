/**
 * 1. Fluid images for responsive purposes.
 * 2. Offset `alt` text from surrounding copy.
 * 3. Setting `vertical-align` removes the whitespace that appears under `img`
 *    elements when they are dropped into a page as-is. Safer alternative to
 *    using `display: block;`.
 */

import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%; /* [1] */
  font-style: italic; /* [2] */
  vertical-align: middle; /* [3] */
  
  &[height],
  &[width] {
    max-width: none;
  }
`;
export default Img;
