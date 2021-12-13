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
  shadow: string;
}

const BaseTheme = {
  'shadow-elevation-low': `0px 0.2px 0.3px hsl(var(--color-shadow) / 0),
  0.1px 0.4px 0.6px hsl(var(--color-shadow) / 0.18),
  0.1px 0.9px 1.4px hsl(var(--color-shadow) / 0.37)`,
  'shadow-elevation-medium': `0px 0.2px 0.3px hsl(var(--color-shadow) / 0),
  0.1px 0.9px 1.4px hsl(var(--color-shadow) / 0.09),
  0.2px 1.5px 2.3px hsl(var(--color-shadow) / 0.19),
  0.3px 2.5px 3.8px hsl(var(--color-shadow) / 0.28),
  0.5px 4.3px 6.5px hsl(var(--color-shadow) / 0.37)`,
  'shadow-elevation-high': `0px 0.2px 0.3px hsl(var(--color-shadow) / 0),
  0.2px 1.7px 2.6px hsl(var(--color-shadow) / 0.04),
  0.4px 2.9px 4.4px hsl(var(--color-shadow) / 0.09),
  0.5px 4.1px 6.2px hsl(var(--color-shadow) / 0.13),
  0.7px 5.4px 8.2px hsl(var(--color-shadow) / 0.17),
  0.9px 7px 10.6px hsl(var(--color-shadow) / 0.22),
  1.1px 9px 13.6px hsl(var(--color-shadow) / 0.26),
  1.4px 11.6px 17.5px hsl(var(--color-shadow) / 0.3),
  1.9px 15px 22.7px hsl(var(--color-shadow) / 0.35),
  2.4px 19.2px 29px hsl(var(--color-shadow) / 0.39)`,
};

export const themes: {
  light: ThemeTemplate;
  dark: ThemeTemplate;
} = {
  light: {
    background: '#FAFAFA',
    text: '#000000',
    title: '#000000',
    'button-hover': 'rgba(0,0,0,0.07)',
    'title-hover': '#6166dc',
    article: '#08080B',
    'horizontal-rule': 'rgba(8,8,11,0.15)',
    gradient: 'linear-gradient(180deg, rgba(217,219,224,0) 0%, #D9DBE0 100%)',
    'reading-time': 'rgb(115, 115, 125)',
    tooltip: 'rgba(0,0,0,0.1)',
    'tag-background': 'rgb(242, 242, 242)',
    shadow: '0deg 0% 68%',
    ...BaseTheme,
  },
  dark: {
    // background: '#111216',
    background: 'hsl(210deg, 30%, 8%)',
    text: '#FFFFFF',
    title: '#FFFFFF',
    'title-hover': '#E9DAAC',
    article: '#FFF',
    'button-hover': 'rgba(255,255,255,0.07)',
    'horizontal-rule': 'rgba(255,255,255,0.15)',
    gradient: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
    'reading-time': '#73737D',
    tooltip: 'rgba(0,0,0)',
    'tag-background': 'rgba(255,255,255,0.05)',
    shadow: '228deg 21% 0%',
    // ...BaseTheme,
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
