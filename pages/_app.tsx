/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import '../styles/normalize.css';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';
import { themes, toggleTheme } from '../lib/theme';
import Header from '../components/layout/header';
import ContentContext from '../lib/context';
import Footer from '../components/layout/footer';
import Gradient from '../components/layout/gradient';
import { pageview } from '../lib/ga';
import '../styles/prism-material-dark.css';

const Content = styled.main`
  // max-width: 1220px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 540px) {
    //padding: 0 20px;
    padding 0;
  }
`;

const Background = styled.div`
  background-color: var(--color-background);
  position: relative;
  transition: background 0.25s ease, color 0.25s ease;
  min-height: 100vh;
`;

function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<string>('light');
  const [grid, setGrid] = useState<GridTypes>('tiles');
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    const persistState = (): void => {
      // check local storage for persiting state
      const root = window.document.documentElement;
      const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
      if (initialColorValue && mounted) setTheme(initialColorValue);

      const gridState = window.localStorage.getItem('grid-layout');
      const isValid = gridState === 'tiles' || gridState === 'list';

      if (mounted && gridState && isValid) setGrid(gridState as GridTypes);
    };
    persistState();
    return () => {
      mounted = false;
    };
  }, []);

  // Google analytics pageview tracking
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);

    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  const handleGridChange = (newLayout: 'tiles' | 'list') => {
    setGrid(newLayout);
    window.localStorage.setItem('grid-layout', newLayout);
  };

  const handleThemeChange = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    toggleTheme();
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

  let currentUrl = '';
  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Nolan Buzanis - Engineer - Writer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:url' content={currentUrl} key='ogurl' />
        <meta property='og:site_name' content='Nolan Buzanis' key='ogsitename' />
        {/* Favicons */}
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {isDevelopment || (
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
      )}
      {isDevelopment || (
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      )}
      <ThemeProvider theme={{ ...themes[theme], name: theme }}>
        <ContentContext.Provider value={{ grid, setGrid: handleGridChange }}>
          <Background>
            <Header toggleTheme={handleThemeChange} />
            <Content>
              <Component {...pageProps} />
            </Content>
            <Gradient />
            <Footer />
          </Background>
        </ContentContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
