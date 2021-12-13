/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { themes } from '../lib/theme';

class MyDocument extends Document {
  codeToRun = `(function(){
    try{
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('theme-ui-color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
  }

const colorMode = getInitialColorMode();

  const root = document.documentElement;
  const COLORS = ${JSON.stringify(themes)};
  let theme = colorMode ? COLORS[colorMode] : COLORS.light;
  Object.entries(theme).forEach(([nameOfVariable, value]) => {
  const cssVarName = \`--color-\${nameOfVariable}\`;
  root.style.setProperty(cssVarName, value);
});

  root.style.setProperty('--initial-color-mode', colorMode);
}catch(e){console.log('Error loading themes')}
  }())`;

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          {/* Importing fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap'
            rel='stylesheet'
          />
          {/* Complicated Theme code */}
          <script dangerouslySetInnerHTML={{ __html: this.codeToRun }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
