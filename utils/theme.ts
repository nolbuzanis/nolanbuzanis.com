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
};

export const darkTheme = {
  name: 'dark',
  bgColor: '#191919',
  textColor: '#FFFFFF',
  title: {
    textColor: '#FFFFFF',
    hoverColor: '#E9DAAC',
  },
  articleText: '#FFF',
};
