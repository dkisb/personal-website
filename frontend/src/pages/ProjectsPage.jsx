import { Box, Container, Typography } from '@mui/material';
import ProjectSection from '../components/ProjectSection';
import { useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box py={8}>
      <Container maxWidth="lg">
        <ProjectSection />
      </Container>
    </Box>
  );
};

export default ProjectsPage;
