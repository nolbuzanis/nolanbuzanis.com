/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import GlobalFonts from '../fonts/fonts';
import '../styles/normalize.css';
import '../styles/globals.css';
import { lightTheme, darkTheme } from '../utils/theme';
import Header from '../components/header';

const Content = styled.main`
  max-width: 1140px;
  margin: 0 auto;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  padding: 0 4rem;
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

  const handleThemeChange = (themeName: 'dark' | 'light') => {
    setTheme(mapThemeName[themeName]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Header setTheme={handleThemeChange} />
        <Content>
          <GlobalFonts />
          <Component {...pageProps} />
        </Content>
      </Background>
    </ThemeProvider>
  );
}

export default App;
