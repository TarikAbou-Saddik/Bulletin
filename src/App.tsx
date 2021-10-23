import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Container from './styles/shared/Container';
import GlobalStyles from './styles/Global';
import theme from './styles/theme';
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container style={{ height: '100vh' }}>
        <Header />
        <Hero />
      </Container>
    </ThemeProvider>
  );
}

export default App;
