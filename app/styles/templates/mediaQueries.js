import { css } from 'styled-components';

export const sizes = {
  xs: 240,
  s: 400,
  m: 600,
  l: 900,
  xl: 1008,
  xxl: 1280,
};

const mq = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { mq as default };
