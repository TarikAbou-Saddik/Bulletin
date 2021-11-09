import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string;
    title: string;
    text: string;
    otherText: string;
    toggleBorder: string;
    background: string;
    logo: string;
    mobileSize: string;
  }
}
