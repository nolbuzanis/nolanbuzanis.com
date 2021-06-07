/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import GlobalFonts from '../fonts/fonts';
import '../styles/normalize.css';
import '../styles/globals.css';
import { lightTheme, darkTheme } from '../utils/theme';
import Header from '../components/header';
import ContentContext from '../utils/context';

const Content = styled.main`
  max-width: 1220px;
  margin: 0 auto;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  // padding: 0 4rem;
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
  const [grid, setGrid] = useState(true);

  const handleThemeChange = (themeName: 'dark' | 'light') => {
    setTheme(mapThemeName[themeName]);
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentContext.Provider value={{ grid, setGrid }}>
        <Background>
          <Header setTheme={handleThemeChange} />
          <Content>
            <GlobalFonts />
            <Component {...pageProps} />
          </Content>
        </Background>
      </ContentContext.Provider>
    </ThemeProvider>
  );
}

export default App;
