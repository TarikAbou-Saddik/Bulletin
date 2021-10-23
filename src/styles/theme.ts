import { DefaultTheme } from 'styled-components';
import DarkLogo from '../assets/Logo/Dark.png';
import LightLogo from '../assets/Logo/Light.png';

const theme: DefaultTheme = {
  borderRadius: '25px',
  colors: {
    light: {
      main: '#F8F9FA',
      contrastText: '#000',
      logo: LightLogo,
    },
    dark: {
      main: '#121212',
      contrastText: '#FFF',
      logo: DarkLogo,
    },
  },
};

export default theme;
