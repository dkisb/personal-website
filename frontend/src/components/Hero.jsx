import { Box, Container, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
        pt: { xs: 8, md: 10 }, // to avoid overlap with fixed navbar
      }}
    >
      <Container maxWidth="md">
        <Box textAlign={{ xs: 'center', md: 'center' }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {t('hero.title')}
          </Typography>

          <Typography variant="h5" color="text.secondary" gutterBottom>
            {t('hero.subtitle')}
          </Typography>

          <Button variant="contained" color="primary" size="large" href="/contact" sx={{ mt: 4 }}>
            {t('hero.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
