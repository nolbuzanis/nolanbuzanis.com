export interface ThemeTemplate {
  name?: 'light' | 'dark';
  background: string;
  text: string;
  title: string;
  'title-hover': string;
  article: string;
  'horizontal-rule': string;
  gradient: string;
  'reading-time': string;
  'button-hover': string;
  tooltip: string;
  'tag-background': string;
}

export const themes: {
  light: ThemeTemplate;
  dark: ThemeTemplate;
} = {
  light: {
    background: '#FAFAFA',
    text: '#000000',
    title: '#000000',
    'button-hover': 'rgba(0,0,0,0.07',
    'title-hover': '#6166dc',
    article: '#08080B',
    'horizontal-rule': 'rgba(8,8,11,0.15)',
    gradient: 'linear-gradient(180deg, rgba(217,219,224,0) 0%, #D9DBE0 100%)',
    'reading-time': 'rgb(115, 115, 125)',
    tooltip: 'rgba(0,0,0,0.1)',
    'tag-background': 'rgb(242, 242, 242)',
  },
  dark: {
    background: '#111216',
    text: '#FFFFFF',
    title: '#FFFFFF',
    'title-hover': '#E9DAAC',
    article: '#FFF',
    'button-hover': 'rgba(255,255,255,0.07',
    'horizontal-rule': 'rgba(255,255,255,0.15)',
    gradient: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
    'reading-time': '#73737D',
    tooltip: 'rgba(0,0,0)',
    'tag-background': 'rgba(242, 242, 242, 0.25)',
  },
};

export const toggleTheme = (): void => {
  try {
    const currentTheme = window.localStorage.getItem('theme-ui-color-mode');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    const root = document.documentElement;
    Object.entries(themes[newTheme]).forEach(([name, value]) => {
      const cssVarName = `--color-${name}`;

      root.style.setProperty(cssVarName, value);
    });

    window.localStorage.setItem('theme-ui-color-mode', newTheme);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error changing theme!', err);
  }
};
