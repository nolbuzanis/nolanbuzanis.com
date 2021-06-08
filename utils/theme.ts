export type ThemeType = typeof lightTheme;

export const lightTheme = {
  name: 'light',
  bgColor: '#FAFAFA',
  textColor: '#000000',
  title: {
    textColor: '#000000',
    hoverColor: '#6166dc',
  },
  articleText: '#08080B',
  horizontalRule: 'rgba(8,8,11,0.15)',
  gradient: 'linear-gradient(180deg, rgba(217,219,224,0) 0%, #D9DBE0 100%)',
};

export const darkTheme = {
  name: 'dark',
  bgColor: '#111216',
  textColor: '#FFFFFF',
  title: {
    textColor: '#FFFFFF',
    hoverColor: '#E9DAAC',
  },
  articleText: '#FFF',
  horizontalRule: 'rgba(255,255,255,0.15)',
  gradient: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
};
