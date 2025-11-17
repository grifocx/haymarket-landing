export const theme = {
  colors: {
    primary: {
      green: '#144D3A',
      greenHover: '#0d3326',
    },
    secondary: {
      lime: '#73BB44',
      limeHover: '#5fa535',
    },
    accent: {
      orange: '#F36E32',
      orangeHover: '#e05d21',
      yellow: '#F5E100',
      yellowHover: '#e5d100',
      limeGreen: '#CBD92A',
    },
    neutral: {
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray400: '#9CA3AF',
      gray600: '#4B5563',
      gray700: '#374151',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme;
