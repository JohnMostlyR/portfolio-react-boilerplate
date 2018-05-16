/**
 * TYPOGRAPHY CONSTANTS
 */

/**
 * Font Stack - sans-serif
 * @type {string}
 */
export const FONT_STACK_SANS_SERIF = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  'sans-serif',
].join(',');

/**
 * Base Line Height
 * @type {number}
 */
export const BASE_LINE_HEIGHT = 1.5;

/**
 * Base Font Size
 * @type {string}
 */
export const BASE_FONT_SIZE = '1rem';

/**
 * Modular Scale Factor
 * @type {number}
 */
export const MODULAR_SCALE_FACTOR = 1.2;

/**
 * Base Letter Spacing
 * @type {string}
 */
export const BASE_LETTER_SPACING = '-0.2px';

/**
 * Base Font Regular
 * @type {string}
 */
export const BASE_FONT_REGULAR = `
  font-family: ${FONT_STACK_SANS_SERIF};
  font-style: normal !important;
  font-weight: 400 !important;  
`;

/**
 * Base Font Italic
 * @type {string}
 */
export const BASE_FONT_ITALIC = `
  font-family: ${FONT_STACK_SANS_SERIF};
  font-style: italic !important;
  font-weight: 400 !important;  
`;

/**
 * Base Font Bold
 * @type {string}
 */
export const BASE_FONT_BOLD = `
  font-family: ${FONT_STACK_SANS_SERIF};
  font-style: normal !important;
  font-weight: 700 !important;  
`;

/**
 * Base Font Italic Bold
 * @type {string}
 */
export const BASE_FONT_ITALIC_BOLD = `
  font-family: ${FONT_STACK_SANS_SERIF};
  font-style: italic !important;
  font-weight: 700 !important;  
`;
