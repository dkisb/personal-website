import Slider from 'react-slick';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      right: -30,
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'background.paper',
      boxShadow: 2,
      '&:hover': { backgroundColor: 'grey.100' },
    }}
  >
    <ArrowForwardIos fontSize="small" />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      left: -30,
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'background.paper',
      boxShadow: 2,
      '&:hover': { backgroundColor: 'grey.100' },
    }}
  >
    <ArrowBackIos fontSize="small" />
  </IconButton>
);

const ProjectSection = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true, // ✅ wrap-around enabled
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box component="section" id="projects" py={10}>
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          {t('projects.title')}
        </Typography>

        <Box sx={{ position: 'relative', px: 4 }}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index} px={1}>
                <ProjectCard {...project} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectSection;
