import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/Global';
import Header from './components/Header';
import Blog from './components/Blog';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Container from './styles/shared/Container';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (): void =>
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

  const resolvedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={resolvedTheme}>
      <GlobalStyles />
      <Container>
        <Header onThemeChange={toggleTheme} />
        <Routes>
          <Route path='/random' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
