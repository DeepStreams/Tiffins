import React from 'react';
import HomePage from './Home';
import Order from './Order';
import { Container, styled } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

const MainContent = styled('div')({
  minHeight: 'calc(100vh - 50px)',
  marginBottom: '10px',
  marginTop: '50px',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <MainContent>
          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Container>
        </MainContent>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
