import { Box, Container, Typography, Grid } from '@mui/material';
import Hero from '../components/Hero';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

const Home = () => {

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
