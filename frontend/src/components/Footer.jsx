import { Box, Container, Typography, Stack, IconButton, Divider, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Twitter, GitHubLight, GitHubDark, LinkedIn, Gmail } from 'developer-icons';
import { useTranslation } from 'react-i18next';
import logo from '../assets/D-logo.svg';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { t } = useTranslation();

  const GitHubIcon = isDark ? GitHubLight : GitHubDark;

  return (
    <Box component="footer" bgcolor="background.paper" py={6} mt={10}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          gap={6}
          mb={4}
        >
          {/* Logo Section */}
          <Box textAlign={{ xs: 'center', md: 'left' }} flex={1}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: 100, md: 140 },
                maxWidth: '100%',
                mb: 1,
              }}
            />
            <Typography variant="subtitle2" color="text.secondary">
              {t('footer.name')}
            </Typography>
          </Box>

          {/* Explore Section */}
          <Box textAlign={{ xs: 'center', md: 'left' }} flex={1}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              {t('footer.explore')}
            </Typography>
            <Stack spacing={1}>
              <MuiLink
                component={RouterLink}
                to="/"
                color="text.primary"
                underline="hover"
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('footer.home')}
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/about"
                color="text.primary"
                underline="hover"
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('footer.about')}
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/projects"
                color="text.primary"
                underline="hover"
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('footer.projects')}
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/contact"
                color="text.primary"
                underline="hover"
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('footer.contact')}
              </MuiLink>
            </Stack>
          </Box>

          {/* Connect Section */}
          <Box textAlign={{ xs: 'center', md: 'left' }} flex={1}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              {t('footer.connect')}
            </Typography>
            <Stack direction="column" spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <IconButton
                href="mailto:kisbalazsdome@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{ p: 0 }}
              >
                <Gmail style={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/döme-marcell-kisbalázs/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                sx={{ p: 0 }}
              >
                <LinkedIn style={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton
                href="https://github.com/dkisb"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                sx={{ p: 0 }}
              >
                <GitHubIcon style={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton
                href="https://x.com/domekisb"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                sx={{ p: 0 }}
              >
                <Twitter style={{ width: 28, height: 28 }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} – {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
}
