export const baseFontStackSansSerif = `
${
  [
    '"Open Sans"',
    'Roboto',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'Helvetica',
    'Arial',
    'freesans',
    'sans-serif',
  ].join(',')
};
`;

export const baseFontStackSerif = `
${
  [
    '"Skolar Regular"',
    '"Roboto Slab"',
    '"Droid Serif"',
    'Cambria',
    'Georgia',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(',')
};
`;

export const baseFontRegular = `
  font-family: ${baseFontStackSansSerif};
  font-style: normal !important;
  font-weight: 400 !important;  
`;

export const baseFontItalic = `
  font-family: ${baseFontStackSansSerif};
  font-style: italic !important;
  font-weight: 400 !important;  
`;

export const baseFontBold = `
  font-family: ${baseFontStackSansSerif};
  font-style: normal !important;
  font-weight: 700 !important;  
`;

export const baseFontItalicBold = `
  font-family: ${baseFontStackSansSerif};
  font-style: italic !important;
  font-weight: 700 !important;  
`;
