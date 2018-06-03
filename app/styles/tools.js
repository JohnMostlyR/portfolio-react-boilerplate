/*
 * A small function allowing you to skip base64 encoding and simply paste the SVG markup right in
 * the CSS.
 *
 * https://codepen.io/jakob-e/pen/doMoML
 */
import { css } from 'styled-components';

function svgToURL(svg) {
  const svgURL = svg.replace(/["%#}{><]/g, (match) => {
    let replacement = match;

    /* eslint-disable default-case */
    switch (match) {
      case '"':
        replacement = '\'';
        break;
      case '%':
        replacement = '%25';
        break;
      case '#':
        replacement = '%23';
        break;
      case '{':
        replacement = '%7B';
        break;
      case '}':
        replacement = '%7D';
        break;
      case '<':
        replacement = '%3C';
        break;
      case '>':
        replacement = '%3E';
    }

    return replacement;
  });

  return `"data:image/svg+xml;charset=utf-8,${svgURL}"`;
}

const SVGBackgroundImage = (svg) => css`
  background-image: url(${svgToURL(svg)});
`;

export { svgToURL, SVGBackgroundImage };
