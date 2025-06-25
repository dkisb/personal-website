import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import selfie from '../assets/selfie.jpg';
import { useTranslation } from 'react-i18next';
import ExperienceTabs from './ExperienceTabs';
import TechStack from './TechStack';

export default function About() {
  const { t } = useTranslation();
  return (
    <Box component="section" id="about" py={{ xs: 8, md: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom sx={{ mb: { xs: 4, md: 6 } }}>
          {t('about.title')}
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          direction={{ xs: 'column', md: 'row' }}
        >
          {/* Text Box */}
          <Grid gridColumn={{ xs: 'span 12', md: 'auto' }}>
            <Paper
              elevation={3}
              sx={{
                width: { xs: '100%', md: 420 },
                height: '100%',
                p: { xs: 3, md: 5 },
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1">
                {t('about.intro')}
                <Typography component="span" fontWeight={600} display="inline">
                  {t('about.name')}
                </Typography>
                {t('about.description')}
              </Typography>
              <Typography variant="body1">{t('about.moreInfo')}</Typography>
            </Paper>
          </Grid>

          {/* Image Box */}
          <Grid gridColumn={{ xs: 'span 12', md: 'auto' }}>
            <Paper
              elevation={3}
              sx={{
                width: { xs: '100%', md: 420 },
                height: '100%',
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper',
              }}
            >
              <Box
                component="img"
                src={selfie}
                alt="Self portrait"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        <ExperienceTabs />
         <TechStack />
      </Container>
    </Box>
  );
}
