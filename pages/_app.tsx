/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import GlobalFonts from '../fonts/fonts';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalFonts />
      <Component {...pageProps} />
    </>
  );
}

export default App;
