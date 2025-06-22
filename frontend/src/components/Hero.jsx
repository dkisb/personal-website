import { Box, Container, Typography, Button, Avatar, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import huFlag from '/hu.svg';
import selfie from '../assets/selfie2.jpg';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        pt: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          {/* Welcome title */}
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {t('hero.title')}
          </Typography>

          {/* Avatar, Role, Location in one horizontal line */}
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ my: 3 }}>
            {/* Avatar with slight zoom */}
            <Avatar
              src={selfie}
              alt="My photo"
              sx={{
                width: 80,
                height: 80,
                boxShadow: 3,
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
                '& img': {
                  transition: 'transform 0.3s ease',
                  objectFit: 'cover',
                  objectPosition: 'top',
                },
              }}
            />

            {/* Role */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
              }}
            >
              {t('hero.subtitle')}
            </Typography>

            {/* Location */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h5" color="text.secondary">
                Based in
              </Typography>
              <Box
                component="img"
                src={huFlag}
                alt="Hungarian flag"
                sx={{ width: 32, height: 32, borderRadius: '50%' }}
              />
            </Stack>
          </Stack>

          {/* Contact Button */}
          <Button variant="contained" color="primary" size="large" href="/contact">
            {t('hero.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
