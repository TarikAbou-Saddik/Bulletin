import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.light.main};
    color: ${({ theme }) => theme.colors.light.contrastText};
  }
`;

export default GlobalStyles;
