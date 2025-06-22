import { Box, Container, Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectSection = () => {
  const { t } = useTranslation();
  return (
    <Box component="section" id="projects" py={10}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          {t('projects.title')}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectSection;
