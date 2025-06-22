import { Box, Container, Typography, Grid } from '@mui/material';
import Hero from '../components/Hero';
import ExperienceTabs from '../components/ExperienceTabs';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import About from '../components/About';

const Home = () => {
  const topProjects = projects.slice(0, 4);

  return (
    <Box py={8}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box mb={8}>
          <Hero />
        </Box>

        {/* About Section */}
        <Box mb={8}>
          <About />
        </Box>

        {/* Experience Section */}
        <Box mb={6}>
          <ExperienceTabs />
        </Box>

        {/* Tech Stack Section */}
        <Box mb={6}>
          <TechStack />
        </Box>

        {/* Projects Section */}
        <Box id="projects">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Featured Projects
          </Typography>

          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" mt={2}>
            {topProjects.map((project, index) => (
              <Grid key={index} gridColumn={{ xs: 4, sm: 4, md: 4 }}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
