/*
 * A small function allowing you to skip base64 encoding and simply paste the SVG markup right in
 * the CSS.
 *
 * https://codepen.io/jakob-e/pen/doMoML
 */
import { css } from 'styled-components';

function svgToURL(svg) {
  const svgURL = svg.replace(/["%#}{><]/g, (match) => {
    switch (match) {
      case '"':
        return '\'';
      case '%':
        return '%25';
      case '#':
        return '%23';
      case '{':
        return '%7B';
      case '}':
        return '%7D';
      case '<':
        return '%3C';
      case '>':
        return '%3E';
      default:
        return match;
    }
  });

  return `"data:image/svg+xml;charset=utf-8,${svgURL}"`;
}

const SVGBackgroundImage = (svg) => css`
  background-image: url(${svgToURL(svg)});
`;

export { svgToURL, SVGBackgroundImage };
