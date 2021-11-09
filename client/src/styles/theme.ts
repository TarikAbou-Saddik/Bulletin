import { DefaultTheme } from 'styled-components';
import DarkLogo from '../assets/Logo/Dark.png';
import LightLogo from '../assets/Logo/Light.png';

const mobileSize = '768px';

export const lightTheme: DefaultTheme = {
  title: 'light',
  background: '#F8F9FA',
  otherText: '#7d7c83',
  text: '#000',
  logo: DarkLogo,
  toggleBorder: '#fff',
  mobileSize,
};

export const darkTheme: DefaultTheme = {
  title: 'dark',
  background: '#121212',
  text: '#fff',
  otherText: '#7d7c83',
  logo: LightLogo,
  toggleBorder: '#fff',
  mobileSize,
};
