/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { AppProps } from 'next/app';
import GlobalFonts from '../fonts/fonts';
// import '../styles/normalize.css';
import '../styles/globals.css';

const Content = styled.main`
  max-width: 1140px;
  margin: 0 auto;
`;

const Background = styled.div`
  background-color: #fafafa;
  padding: 0 8%;
  @media only screen and (max-width: 540px) {
    padding: 0 20px;
  }
`;

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Background>
      <Content>
        <GlobalFonts />
        <Component {...pageProps} />
      </Content>
    </Background>
  );
}

export default App;
