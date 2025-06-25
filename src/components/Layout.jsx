import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Container, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../data/ThemeContext';

export default function Layout() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar toggleTheme={colorMode.toggleColorMode} mode={theme.palette.mode} />
      <Box component="main" flexGrow={1} py={2}>
        <Container>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
