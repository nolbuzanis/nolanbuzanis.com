/* eslint-disable react/jsx-props-no-spreading */
import { useState, useLayoutEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import '../styles/normalize.css';
import '../styles/globals.css';
import { lightTheme, darkTheme } from '../utils/theme';
import Header from '../components/layout/header';
import ContentContext from '../utils/context';
import Footer from '../components/layout/footer';
import Gradient from '../components/layout/gradient';

const Content = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  // padding: 0 4rem;
  position: relative;
  transition: background 0.25s ease, color 0.25s ease;
  min-height: 100vh;
  @media only screen and (max-width: 540px) {
    padding: 0 20px;
  }
`;

const mapThemeName = {
  dark: darkTheme,
  light: lightTheme,
};

function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState(lightTheme);
  const [grid, setGrid] = useState<GridTypes>('tiles');

  useLayoutEffect(() => {
    let isMounted = true;
    const persistState = (): void => {
      // check local storage for persiting state
      const localThemeName = window.localStorage.getItem('theme-ui-color-mode');
      if (localThemeName && isMounted) setTheme(mapThemeName[localThemeName]);

      const gridState = window.localStorage.getItem('grid-layout');
      const isValid = gridState === 'tiles' || gridState === 'list';

      if (isMounted && gridState && isValid) setGrid(gridState as GridTypes);
    };
    persistState();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleThemeChange = (themeName: 'dark' | 'light') => {
    setTheme(mapThemeName[themeName]);
    window.localStorage.setItem('theme-ui-color-mode', themeName);
  };

  const handleGridChange = (newLayout: 'tiles' | 'list') => {
    setGrid(newLayout);
    window.localStorage.setItem('grid-layout', newLayout);
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentContext.Provider value={{ grid, setGrid: handleGridChange }}>
        <Background>
          <Header setTheme={handleThemeChange} />
          <Content>
            <Component {...pageProps} />
            {/* <Gradient /> */}
          </Content>
          <Gradient />
          <Footer />
        </Background>
      </ContentContext.Provider>
    </ThemeProvider>
  );
}

export default App;
