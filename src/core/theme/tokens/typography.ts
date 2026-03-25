export const typography = {
  fontFamily: {
    sans: '"Roboto", "Helvetica", "Arial", sans-serif',
    mono: "'Courier New', monospace",
  },
  fontSize: {
    xs:   { size: '11px', lineHeight: '16px', letterSpacing: '0.4px' },
    sm:   { size: '12px', lineHeight: '18px', letterSpacing: '0.2px' },
    base: { size: '14px', lineHeight: '20px', letterSpacing: '0.1px' },
    md:   { size: '16px', lineHeight: '24px', letterSpacing: '0px'   },
    lg:   { size: '18px', lineHeight: '28px', letterSpacing: '-0.2px'},
    xl:   { size: '20px', lineHeight: '30px', letterSpacing: '-0.4px'},
    '2xl':{ size: '24px', lineHeight: '32px', letterSpacing: '-0.5px'},
    '3xl':{ size: '28px', lineHeight: '36px', letterSpacing: '-0.6px'},
    '4xl':{ size: '32px', lineHeight: '40px', letterSpacing: '-0.8px'},
    '5xl':{ size: '40px', lineHeight: '48px', letterSpacing: '-1px'  },
  },
  fontWeight: {
    light:    300,
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
} as const
