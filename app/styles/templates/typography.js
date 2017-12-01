export const baseFontStackSansSerif = `
${
  [
    '"Segoe UI"',
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

const groups = {
  groupB: 320,
  groupC: 600,
  groupD: 600,
};

const sizes = {
  atlas: {
    groupA: {
      fontSize: 78,
      lineHeight: 84,
    },
    groupB: {
      fontSize: 96,
      lineHeight: 104,
    },
    groupC: {
      fontSize: 192,
      lineHeight: 208,
    },
    groupD: {
      fontSize: 140,
      lineHeight: 148,
    },
  },
  elephant: {
    groupA: {
      fontSize: 60,
      lineHeight: 64,
    },
    groupB: {
      fontSize: 78,
      lineHeight: 84,
    },
    groupC: {
      fontSize: 156,
      lineHeight: 170,
    },
    groupD: {
      fontSize: 116,
      lineHeight: 124,
    },
  },
  imperial: {
    groupA: {
      fontSize: 50,
      lineHeight: 54,
    },
    groupB: {
      fontSize: 64,
      lineHeight: 72,
    },
    groupC: {
      fontSize: 124,
      lineHeight: 136,
    },
    groupD: {
      fontSize: 96,
      lineHeight: 104,
    },
  },
  royal: {
    groupA: {
      fontSize: 40,
      lineHeight: 44,
    },
    groupB: {
      fontSize: 52,
      lineHeight: 60,
    },
    groupC: {
      fontSize: 94,
      lineHeight: 104,
    },
    groupD: {
      fontSize: 76,
      lineHeight: 84,
    },
  },
  foolscap: {
    groupA: {
      fontSize: 32,
      lineHeight: 36,
    },
    groupB: {
      fontSize: 40,
      lineHeight: 44,
    },
    groupC: {
      fontSize: 72,
      lineHeight: 80,
    },
    groupD: {
      fontSize: 56,
      lineHeight: 60,
    },
  },
  canon: {
    groupA: {
      fontSize: 28,
      lineHeight: 32,
    },
    groupB: {
      fontSize: 32,
      lineHeight: 36,
    },
    groupC: {
      fontSize: 52,
      lineHeight: 56,
    },
    groupD: {
      fontSize: 44,
      lineHeight: 48,
    },
  },
  trafalgar: {
    groupA: {
      fontSize: 20,
      lineHeight: 24,
    },
    groupB: {
      fontSize: 24,
      lineHeight: 28,
    },
    groupC: {
      fontSize: 36,
      lineHeight: 40,
    },
    groupD: {
      fontSize: 32,
      lineHeight: 36,
    },
  },
  paragon: {
    groupA: {
      fontSize: 20,
      lineHeight: 24,
    },
    groupB: {
      fontSize: 22,
      lineHeight: 26,
    },
    groupC: {
      fontSize: 28,
      lineHeight: 32,
    },
    groupD: {
      fontSize: 28,
      lineHeight: 32,
    },
  },
  doublePica: {
    groupA: {
      fontSize: 20,
      lineHeight: 24,
    },
    groupB: {
      fontSize: 20,
      lineHeight: 24,
    },
    groupC: {
      fontSize: 26,
      lineHeight: 40,
    },
    groupD: {
      fontSize: 24,
      lineHeight: 28,
    },
  },
  greatPrimer: {
    groupA: {
      fontSize: 18,
      lineHeight: 22,
    },
    groupB: {
      fontSize: 18,
      lineHeight: 22,
    },
    groupC: {
      fontSize: 21,
      lineHeight: 24,
    },
    groupD: {
      fontSize: 20,
      lineHeight: 24,
    },
  },
  bodyCopy: {
    groupA: {
      fontSize: 15,
      lineHeight: 20,
    },
    groupB: {
      fontSize: 16,
      lineHeight: 22,
    },
    groupC: {
      fontSize: 18,
      lineHeight: 24,
    },
    groupD: {
      fontSize: 16,
      lineHeight: 22,
    },
  },
  pica: {
    groupA: {
      fontSize: 15,
      lineHeight: 20,
    },
    groupB: {
      fontSize: 16,
      lineHeight: 20,
    },
    groupC: {
      fontSize: 18,
      lineHeight: 22,
    },
    groupD: {
      fontSize: 16,
      lineHeight: 20,
    },
  },
  longPrimer: {
    groupA: {
      fontSize: 15,
      lineHeight: 18,
    },
    groupB: {
      fontSize: 15,
      lineHeight: 18,
    },
    groupC: {
      fontSize: 15,
      lineHeight: 20,
    },
    groupD: {
      fontSize: 14,
      lineHeight: 18,
    },
  },
  brevier: {
    groupA: {
      fontSize: 14,
      lineHeight: 16,
    },
    groupB: {
      fontSize: 14,
      lineHeight: 18,
    },
    groupC: {
      fontSize: 14,
      lineHeight: 18,
    },
    groupD: {
      fontSize: 13,
      lineHeight: 16,
    },
  },
  minion: {
    groupA: {
      fontSize: 12,
      lineHeight: 16,
    },
    groupB: {
      fontSize: 12,
      lineHeight: 16,
    },
    groupC: {
      fontSize: 13,
      lineHeight: 16,
    },
    groupD: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
};

const typography =
  Object.keys(sizes).reduce((acc, label) => {
    acc[label] = `
        font-size: ${sizes[label].groupA.fontSize / 16}rem;
        line-height: ${sizes[label].groupA.lineHeight / 16}rem;

        @media (min-width: ${groups.groupB / 16}em) {
          font-size: ${sizes[label].groupB.fontSize / 16}rem;
          line-height: ${sizes[label].groupB.lineHeight / 16}rem;
        }

        @media (min-width: ${groups.groupC / 16}rem) {
          font-size: ${sizes[label].groupC.fontSize / 16}rem;
          line-height: ${sizes[label].groupC.lineHeight / 16}rem;
        }
      `;

    return acc;
  }, {});

export { typography as default };
