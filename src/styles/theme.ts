export const theme = {
  colors: {
    white: '#FFFFFF',
    blue: '#0076FF',
    grey50: '#FAFBFC',
    grey100: '#EAEAEA',
    grey500: '#999',
    black900: '#000000',
    transparent: 'transparent',
    mercadolivre: '#fff159'
  },
  fontSize: {
    huge: '96px',
    incredibleLarge: '56px',
    larger: '36px',
    large: '26px',
    normal: '16px',
    small: '12px',
  },
  transitionDelay: {
    default: '0.2s',
  },
  shadows: {
    darker: '0 0.5rem 2rem rgba(0, 0, 0, 0.60)',
    default: '0 0.5rem 2rem rgba(0, 0, 0, 0.30)',
    flat: '0 0.2rem 0.2rem rgba(0, 0, 0, 0.08)',
  },
};

export type ITheme = typeof theme;
