import { Box, Container, Typography, Button, Avatar } from '@mui/material';
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
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
          {/* Avatar on the left, rounded edges */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: { md: 6 },
              mb: { xs: 4, md: 0 },
              height: { xs: 140, sm: 180, md: 220 },
              minWidth: { xs: 140, sm: 180, md: 220 },
            }}
          >
            <Avatar
              src={selfie}
              alt="My photo"
              variant="rounded"
              sx={{
                width: { xs: 140, sm: 180, md: 220 },
                height: { xs: 140, sm: 180, md: 220 },
                boxShadow: 5,
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover img': {
                  transform: 'scale(1.07)',
                },
                '& img': {
                  transition: 'transform 0.3s ease',
                  objectFit: 'cover',
                  objectPosition: 'top',
                },
              }}
            />
          </Box>

          {/* Text section on the right */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }}>
              {t('hero.title')}
            </Typography>

            {/* Subtitle section */}
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  lineHeight: 1.2,
                  fontSize: { xs: '1.25rem', md: '2rem' },
                }}
              >
                {t('hero.subtitle1')}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 1,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: { xs: '1.25rem', md: '2rem' },
                  }}
                  component="span"
                >
                  {t('hero.subtitle2')}
                </Typography>
                <Box
                  component="img"
                  src={huFlag}
                  alt="Hungarian flag"
                  sx={{
                    width: 40,
                    height: 40,
                    ml: 1,
                    flexShrink: 0,
                    display: 'inline-block',
                  }}
                />
              </Box>
            </Box>

            {/* Contact Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/contact"
              sx={{ mt: 5, fontSize: { xs: '1.1rem', md: '1.3rem' }, px: 4, py: 1.5 }}
            >
              {t('hero.cta')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
