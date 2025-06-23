import { Box, Container, Typography, Grid } from '@mui/material';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box py={8}>
      <Container maxWidth="lg">
        <Box mb={8} id="hero">
          <Hero />
        </Box>
        <Box mb={8} id="about">
          <AboutPage />
        </Box>
        <Box id="projects">
          <ProjectsPage />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
