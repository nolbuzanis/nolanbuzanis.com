import {} from 'styled-components';
import { ThemeTemplate } from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeTemplate {}
}
