import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      light: {
        main: string;
        contrastText: string;
        logo: string;
      };
      dark: {
        main: string;
        contrastText: string;
        logo: string;
      };
    };
  }
}
